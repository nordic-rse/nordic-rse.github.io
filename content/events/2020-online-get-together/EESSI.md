+++
title = "European Environment for Scientific Software Installations (EESSI)"
template = "session.html"
[extra]
authors = "Thomas Röblitz"
session = "3.3"
+++

We will do a presentation of the EESSI (European Environments for Scientific Software Installations) project including a demo of its current pilot software stack.

In a nutshell, EESSI develops an infrastructure/service which will eventually allow you to use the same scientific software stack on any machine (e.g., Raspberry Pi, laptop, server, cluster, cloud, supercomputer) running on various operating systems (Linux, macOS, Windows) and the software stack is built from sources and can thereby be optimised for the CPU/GPU/interconnect at your machine. Even better you don't even have to install (almost) any software package as the stack will be delivered to you via CernVM-FS a proven solution to distribute software in the WLCG (Worldwide LHC Computing Grid).

The current pilot stack can be easily tested via Singularity, supports ARM, Intel and AMD processors and includes scientific software packages such as GROMACS, OpenFOAM, bioconductor, TensorFlow as well as all their dependencies.
