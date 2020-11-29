+++
title = "Intro to the HTCondor Python API on a laptop cluster"
template = "session.html"
[extra]
authors = "Matthew West"
session = "2.4"
+++



### Abstract
The philosophy of HTCondor is to allow researchers to easily automate and scale their workflows for greater overall throughput with minimal changes to the analysis code itself. The objective is to run jobs as efficiently as possible wherever there are available resources. [CHTC](https://chtc.cs.wisc.edu/)'s HTCondor software suite provides not just the batch system but a toolset that includes workflow pipeline automation, performance evaluation, and containerized environments. This demo will cover:
- Running a cluster within a Docker container on Windows
- Using the Python API to construct and submit a multi-layer workflow
- Parsing log-files for performance information

### Prior knowledge
- Some experience with a cluster batch scheduling system
- Familiarity with the Python programming language

### References
- Github [repo](https://github.com/mtwest2718/estimate_pi) for scripts
- DockerHub [link](https://hub.docker.com/r/htcondor/htc-scipy-notebook) for HTCondor-Scipy container
- HTCondor Python API documentation [page](https://htcondor.readthedocs.io/en/latest/apis/python-bindings/index.html) 
