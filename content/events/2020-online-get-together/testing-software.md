+++
title = "Testing Software: From Unit Testing to Model-based Testing"
template = "session.html"
[extra]
authors = "Cyrille Artho"
session = "2.3"
+++

Unit tests are fixed sequences of function calls that set up the software to the right state and test the outcome of one or a couple of functions. Unit testing has the advantage that if the functionality of the test is relatively clear, at the expense of generality. It is not feasible to create a diverse set of test cases by unit testing alone; we need higher levels of abstraction.
Model-based testing allows a developer to create a higher-level model of software, which models the functionality of an entire software module. A good test model is capable of generating diverse test cases with different API calls and parameters, while still having a relatively precise test oracle.
We will first present model-based testing and our experience with testing Apache ZooKeeper, where we found an unknown, complex defect. After that, we will give a tutorial where participants can create and modify models of Java collections.

Links:
[Modbat github page](https://github.com/cyrille-artho/modbat/)
[Modbat tutorial page](https://github.com/cyrille-artho/modbat/tree/master/src/test/scala/modbat/tutorial)
