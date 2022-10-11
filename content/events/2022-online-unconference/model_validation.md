+++
title = "Make model validation sexy again"
template = "session.html"
[extra]
authors = "Sunniva Indrehus"
session = "2.2"
+++

Code written to simulate real physical systems typically needs to provide an ensemble of input parameters to create a valid simulation. Writing logic for model validation is a repetitive and tedious task that needs to be handled with great care when performed manually.

This talk will show how the modern software stack can simplify model validation of a traditional finite element method. With the combination of pydantic, docker, and Fast-API we can even make Fortran77 sexy again.