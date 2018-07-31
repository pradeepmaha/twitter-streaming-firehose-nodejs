/***
Copyright 2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Amazon Software License (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

http://aws.amazon.com/asl/

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
***/

'use strict';

var config = module.exports = {
 firehose : {
  DeliveryStreamName: 'twitter', /* required */
  S3DestinationConfiguration: {
    BucketARN: 'arn:aws:s3:::twitter-analysis-data', /* required if stream not exists */
    RoleARN: 'arn:aws:iam::256555058276:user/pradeep.mahalingam:role/firehose_delivery_role', /* required if stream not exists */
    BufferingHints: {
      IntervalInSeconds: 60,
      SizeInMBs: 1
    },
    CompressionFormat: 'UNCOMPRESSED', /* 'UNCOMPRESSED | GZIP | ZIP | Snappy' */
    EncryptionConfiguration: {
      NoEncryptionConfig: 'NoEncryption'
    },
    Prefix: '<YOUR S3 PREFIX>'  /* if stream not exists. example: twitter/raw-data/  */
  }
  },
  twitter: {
      consumer_key: 'yWzQy0QRtXh8g7J3eLaDBsd2Q',
      consumer_secret: 'Ltv2bW1BnMOJsrpBcZQJ3BtZp6T6l20nDbpIahPU8c3PBOQXyL',
      access_token: '1005244560119947264-HAIffBBHoNsIur4rTMoiuhzy3DJ1xh',
      access_token_secret: 'qzPJLyFHhKiBOObMMvr3PnEJAKeapDJmmOfiiTz5fVcpq'
 },
 locations: ['-127.33,23.34,-55.52,49.56'], //US   (All the world:'-180,-90,180,90; New York City:-74,40,-73,41; San Francisco:-122.75,36.8,-121.75,37.8, US:-127.33,23.34,-55.52,49.56)
 waitBetweenDescribeCallsInSeconds: 2,
 recordsToWritePerBatch: 100,
 waitBetweenPutRecordsCallsInMilliseconds: 50,
 region: 'us-east-2'   
};
