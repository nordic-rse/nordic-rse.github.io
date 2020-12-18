+++
title = "Lessons learned from procuring a fairly large HPC system"
template = "session.html"
[extra]
authors = "Thor Wikfeldt and Gert Svensson"
session = "3.3"
+++

Procuring an HPC system - a.k.a. a supercomputer - is a complex and
multifaceted task. Before sending out the *Request For Proposals* the
procurer needs to quantify requirements along several dimensions and
decide on an acceptable level of risk. Should the tendered system
maximize benefit for existing users and use cases, or should possible
future user communities and emerging HPC workloads be factored in? Do
you prioritize throughput capability or minimizing time to solution
for given workloads? How important are acquisition and running costs
compared to other measures? Are you willing to invest in future
technologies which would require significant refactoring of commonly
used HPC simulation software? Which HPC software should be included in
the benchmarking suite, and how should benchmark results be scored?

This session will start with a walk through of several aspects of an
HPC procurement and will be followed by an open discussion where
participants can share their own experiences. A goal of the discussion
can be to arrive at a set of best practices in HPC procurements.


Slides: https://hackmd.io/@KTW/HPC-procurement-lessons#/

---

#### Questions and comments


1. Are you monitoring your cluster usage? What tools?
2. Do you regularly run regression tests? Which tools? 
3. How did you select application benchmarks?
4. How did you design the scoring system? 
5. Was there anything that surprised you during the procurement process?
6. What was particularly challenging?
7. Do you think the procurement could have been more successful if you had done anything differently? If so, what?
8. Should we score the quality of benchmark reports?
9. Is it worth all the work to use real application benchmarks? Or use only synthetic or kernels--benchmarks?
10. How should we estimate the "real" power usage of the system?
11. Do we need to run a job mix to evaluate how different users affect each other?
12. Is benchmarks a good way to evaluate the "competence" of the vendor?

* Q: How did your requirements gathering procedure work, how did you implement risk assesment to requirement process?

* Q: Is the benchmark list exhaustive for the application benchmarks? Can you elaborate on why you chose such narrow scope of the benchmarks?
  - 7 benchmarks are probably at the upper end and is approaching painful for vendors. 
  - including more benchmarks leads to overall worse results
  - one often ends up benchmarking the vendor benchmark teams
    - is this a good thing because we will need software support later?
        - benchmark teams (might) not the same group that does support 

- how much modification of benchmark codes should be allowed?
    - major refactoring not representative of typical future use, so might want to keep it minimal

- performance for individual proxy benchmarks and application benchmarks can point in different directions, but often becomes robust after averaging  
- to eliminate small/less competent vendors, can require certain minimum placement on top500 or alternatively have requirements on vendor stability or financial aspects 

* Q: did you have a dynamic rebalancing of scores for phase 1 and phase 2 depending on the bids?
    - we had minimum performance on each phase
    - turned out that it paid off for vendors to focus efforts on phase 2
    - we decided to have phase 2 with accelerators because that's where HPC is heading, even if all users were not in favor

