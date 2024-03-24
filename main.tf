provider "aws" {
  region = "us-east-1" # Set the desired region
}

resource "aws_s3_bucket" "static_website" {
  bucket = "s3.daniel-aws.info"
  acl    = "public-read" # Define the bucket permissions

  website {
    index_document = "index.html" # File to serve as the index page
  }

  tags = {
    Name = "StaticWebsiteBucket"
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.static_website.bucket

  policy = jsonencode({
    Statement = [{
      Action    = "s3:GetObject"
      Effect    = "Allow"
      Principal = "*"
      Resource  = "${aws_s3_bucket.static_website.arn}/*"
    }]
  })
}

output "bucket_name" {
  value = aws_s3_bucket.static_website.bucket
}
