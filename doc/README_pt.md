# [Streaming Cloudnative Project](http://d130vf1311tsqd.cloudfront.net/swagger-ui/index.html)
[English Version](../README.md)   
Esse projeto é um streaming cloud-native projetado para armazenar, gerenciar, processar e entregar conteúdo de mídia estática, como música e podcasts. É construído usando tecnologias modernas e segue as melhores práticas em desenvolvimento de software. O projeto é projetado para ser escalável, confiável e fácil de manter.

## Showcase
[![foo](https://gyazo.com/6a405dd0c5f09bd26a5e3b5cb3548c23.png)](https://streamable.com/b8pheo)     
**OBS: Clique na imagem para ver o vídeo.**

## Principais Tecnologias
- **API Robusta**: Utiliza uma API robusta escrita em Java com Spring Boot. A API é projetada para ser fácil de usar e oferece uma ampla gama de recursos para gerenciar conteúdo de mídia. Para ver mais detalhes sobre a API, consulte a [API Doc](https://github.com/LuigiPereira1709/streaming-api/blob/main/doc/README_pt.md).  
- **Função Serverless**: Implementa uma função serverless usando AWS Lambda para processar conteúdo de mídia. A função é projetada para ser escalável e econômica, permitindo o processamento eficiente de arquivos de mídia. Para ver mais detalhes sobre a função serverless, consulte a [Serverless Function Doc](https://github.com/LuigiPereira1709/lambda-audio-converter/blob/main/doc/README_pt.md).     
- **Nativo da AWS**: Utiliza serviços nativos da AWS para fornecer uma infraestrutura escalável e confiável para o projeto.

## Pré-requisitos
### IAM
Crie funções IAM com as seguintes políticas e permissões, exemplos abaixo:
Permission group
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3GlobalPermissions",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
      "Resource": "your-media-bucket-arn-here/*"
    }
  ]
}
```

API Trust and Permissions
- Trust policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```
- Permissions policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowSSMAccess",
      "Effect": "Allow",
      "Action": [
        "ssm:*",
      ],
      "Resource": "*"
    },
    {
      "Sid": "AllowSecretsManagerAccess",
      "Effect": "Allow",
      "Action": "secretsmanager:GetSecretValue",
      "Resource": "your-secret-arn-here"
    },
    {
      "Sid": "AllowScriptBucketRead",
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "your-script-bucket-arn-here/*"
    },
    {
      "Sid": "AllowCloudFrontInvalidation",
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "your-cloudfront-distribution-arn-here"
    }
  ]
}
```

Função Serverless Trust and Permissions
- Trust policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```
- Permissions policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "BasicLambdaLogging",
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "your-log-group-arn-here"
    },
    {
      "Sid": "S3MediaBucketListAllPrefixes",
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "your-media-bucket-arn-here"
    }
  ]
}
```

## Banco de Dados
Crie um banco de dados MongoDB com os seguintes schemas validators:
- [Music Schema](database/music_schema.js)
- [Podcast Schema](database/podcast_schema.js)

## Project Structure
```plaintext
.
├── database/       # Schemas e validators do banco de dados
├── doc/            # Documentação extra
├── iam/            # IAM policies e exemplos 
│   └── examples/
│       ├── backend/    # IAM policies do backend 
│       ├── lambda/     # IAM policies do Lambda 
│       └── permission_group.json  # Grupo de permissões 
│
├── lambda-audio-converter/  # Função serverless para conversão de áudio 
└── streaming-api/           # API para gerenciamento de conteúdo de mídia 
```

## Design do Sistema
![Design do Sistema](system_design_v1.png)

## Links 
[Acesse Minha API](http://d130vf1311tsqd.cloudfront.net/swagger-ui/index.html)

## Licença
Este projeto é licenciado sob a Licença GNU GPL v3.0. Consulte o arquivo [LICENSE](../LICENSE.txt) para obter mais informações. 

