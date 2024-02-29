
# Getting started

This repository contains the docker image based on the apickli source. The idea here is that you can create a simple service with a REST api and 
use the docker image created under `docker` directory which is stored in the talent consulting [packages](https://github.com/talentconsulting/consumer-based-contract-testing/pkgs/container/engineering.consumer-based-contract-testing)

This docker image can be used to outside-in test a REST API service, with a rich language of functionality provided by [apickli](https://github.com/apickli/apickli)

# Requirements

Containerised services
Docker installed on your machine

# Consumer Contract Testing

Consumer Contract testing repository that attempts to show a simple approach to testing micro-services 

The code contains the Dockerfile to push up an apckli image. This image is used to testing an 
example consumer / service communicating over REST

![consumer based contract testing](contract%20testing.drawio.png)

# What is a consumer contract test?

_Consumer-Driven Contracts are a pattern for evolving services. In Consumer-Driven Contracts, each consumer captures 
their expectations of the provider in a separate contract. All of these contracts are shared with the provider,
(In our case a Pull Request) so they gain insight into the obligations they must fulfill for each individual client. 
The provider can create a test suite to validate these obligations. This lets them stay agile and make changes that do 
not affect any consumer, and pinpoint consumers that will be affected by a required change for deeper planning and discussion._

The examples provide an insight into how you would use this docker container to outside in test your services with [apickli](https://github.com/apickli/apickli)

# Example

An example of something that uses this docker image to perform outside in consumer contract tests can be found [here](https://github.com/talentconsulting/service-catalog/blob/main/test.sh)