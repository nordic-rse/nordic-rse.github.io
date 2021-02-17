+++
title = "Helping build a developer community though good software practice"
template = "session.html"
[extra]
authors = "Mark Abraham"
session = "2.4"
+++

GROMACS is a free, open-source molecular dynamics community code mainly
designed for simulations of proteins, lipids, and nucleic acids. It is one of
the fastest and most popular scientific software packages available, and can
run on central processing units (CPUs) and graphics processing units (GPUs). In
this session, Mark Abraham (former development manager of GROMACS) will
illustrate software development practices that helped build the GROMACS
developer community. Mark will be happy to take any questions you might have,
e.g. on how to apply similar ideas to the software projects you are working on.

#### Questions and comments

 * You moved from specific tools (gerrit, bugzilla) to gitlab. Do you think the integrated solution is better then specific tools?
   * Specialized tools can lack integration with each other, integrated tools work as a whole
* How often do you need to deal with support requests from your community that are related to somehow having GROMACS installed or compiled incorrectly (and is there stuff you do to avoid problems like that from happening)?
   * can avoid some support questions on installation through continuous integration
* Regarding unit tests: How do you find the sweet spot between creating too few unit tests and trying to come up with every single input combination so all bases are covered and your software is fool-proof?
   * No perfect solution, need to choose a balance. Physics constraints provide useful general tests.
* did you do specific outreach activities to reach new contributors
   * pre-covid there were some developer workshops by external people. Some have later joined the dev community
   
