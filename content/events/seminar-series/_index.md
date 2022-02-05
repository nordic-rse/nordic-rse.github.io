+++
title = "Research Software Seminar Series"
description = "Nordic RSE – Research Software Engineers in the Nordics - Research Software Seminar Series"
template = "seminar-series.html"
[extra]
subtitle = ""
+++

Are you developing software or tools that are driven by research/engineering in
either academia or industry?  Do you need to network, share knowledge and
experiences with your peers?  Then you came to the right page: Nordic-RSE
invites everyone interested to participate in Research Software Seminar Series:


## Timing

The series will start out as a **monthly event in August 2021**. The time for
each seminar will be set by the speaker. We are inviting everyone to suggest
topics and/or speakers for this series [here](https://github.com/nordic-rse/nordic-rse.github.io/issues).

To kick off the event some of our members will introduce you to their work at
Nordic universities.


## Format

As an example, events can be 60 min (40+20 discussion) or 30 min (15+15
discussion).  Events could be talks, demos, discussion, debates, and so on.
Events are hosted with HackMD for public asynchronous discussion.  We will
provide mentoring for speakers.

We would like this series to be an informal space also for exchanging ideas and
experiences, learning something new, and networking with people of the same
interest group. You do not have to be a Research Software Engineer or a
Researcher or a Software Engineer nor do you have to be in or be related to the
Nordics. Everyone interested in RSE activities is welcome and encouraged to
participate!

The Nordic-RSE team will provide support and infrastructure.

---

## Upcoming seminars

We will publish upcoming seminar topics and abstracts here as soon as they are confirmed.
You can see topics in planning and add your own suggestions on our [Issues page](https://github.com/nordic-rse/nordic-rse.github.io/issues).

#### February 2022: The importance and role of community in open source

- Speaker: [Logan Kilpatrick](https://twitter.com/officiallogank), JuliaLang
- 2022-02-16, 17-18 CET [convert to your time zone](https://arewemeetingyet.com/Stockholm/2022-02-16/17:00)
- Hackmd (contains connection details): <https://hackmd.io/@nordic-rse/community_oss>
- Abstract: COMING SOON 
---

## Past seminars

We will publish past seminar topics and their recordings here as soon as they are available.

#### January 2022: Developing and distributing in-house R-packages
- Speaker: [Athanasia Monika Mowinckel](https://drmowinckels.io/about/), University of Oslo
- 2022-01-20, 13-14 CET [convert to your timezone](https://arewemeetingyet.com/Stockholm/2022-01-20/13:00)
- Hackmd notes: <https://hackmd.io/@nordic-rse/R_packaging>
- [slides](https://athanasiamo.github.io/talks/slides/2022.01.20-rse-pgk/#1)
- [recording](https://youtu.be/i2fnLtED86E)

R is mainly a statistical programming language than has been around for more than 20 years. In recent years, it has seen a large resurge in popularity, especially amongst researchers, for its powerful statistical backbone and open source practice. But R can be unfamiliar and intimidating for researchers used to a purely GUI based statistical tool. This talk will center around how I have developed in-house R tools to clean and handle in-house data, and how I have distributed these to work on multiple platforms.

#### November: Blurring the lines: Singularity containerisation of SLURM orchestrators
- Speaker: Frankie Robertson, University of Jyväskylä
- 2021-11-23, 13-15 CET [convert to your timezone](https://arewemeetingyet.com/Stockholm/2021-11-23/13:00)
- Hackmd notes: <https://hackmd.io/@nordic-rse/singularity_containerization>
- [Recording](https://youtu.be/revklPtujtE)

While [SLURM](https://slurm.schedmd.com) itself provides tools for job
orchestration like job arrays, high level tools like
[Snakemake](https://snakemake.github.io/) and [Ray](https://www.ray.io/) are
cluster agnostic and can either make use of SLURM or run on a laptop. To make
Snakemake and Ray to run within Singularity, I present
[singreqrun](https://github.com/frankier/singreqrun), which works by requesting
the host runs programs on behalf of the container.

The talk doubles as an introduction to Snakemake and Ray. After some brief
background on the main tools (Singularity, SLURM, Snakemake and Ray), we
proceed to shell code-along to run the following examples:

 * Snakemake for heterogeneous (mixture of CPU and GPU nodes) video corpus
   processing + quick porting across HPC clusters
 * Snakemake for text corpus processing including using extra Singularity
   containers for utilities
 * Ray for hyperparameter search

I end the talk by opening for discussion. Is this a good approach? Can we
improve upon it?

#### October 2021: I/O profiling and optimization.
- Speaker: Simo Tuomisto, [Aalto Scientific
  Computing](https://scicomp.aalto.fi)
- Abstract: In computing, I/O bandwidth is just as much of a
  consumable resource as CPU and memory.  While on an individual scale
  on one's own computer, this is often not the most pressing
  consideration, on a cluster with shared storage (or very intensive
  individual projects) it is actually very important to consider.
  This talk presented lessons and tools that RSEs should have in
  their toolbox, as we have learned at Aalto Scientific Computing over
  the years.
- HackMD notes: <https://hackmd.io/@nordic-rse/io-monitoring-optimization>

* [Recording](https://youtu.be/mtKZbDtZ7PE)

#### September 2021: Combining Rust and Python: Why and How?

- Speaker: [Radovan Bast](https://bast.fr/), UiT The Arctic University of Norway
- 2021-09-14, 13-14 CEST [convert to your timezone](https://arewemeetingyet.com/Stockholm/2021-09-14/13:00)
- HackMD notes: <https://hackmd.io/@nordic-rse/rust-python>

* Blogpost: coming soon
* [Recording](https://youtu.be/UQF2Ez8GyL8)


#### August 2021: Package development in Julia

- Speaker: [Luca Ferranti](https://lucaferranti.github.io), University of Vaasa, Finland.
- 2021-08-18, 13-16 CEST [convert to your timezone](https://arewemeetingyet.com/Stockholm/2021-08-18/13:00).
- HackMD notes: <https://hackmd.io/@nordic-rse/package-development-julia>

[Julia](https://julialang.org/) is constantly gaining popularity both in academia and industry and it is thus an appealing programming language for research software engineers. This session will be a hands-on tutorial, which will cover the typical package development workflow in Julia. Topics covered include
  - Creating a package from scratch
  - Contributing to existing packages
  - Tools to test and debug your packages
  - Tools to document your packages

Moreover, Luca will share tips and tricks that have helped him making his workflow more efficient and hopefully will help you too.
The workshop will involve a lot of live coding and you are encouraged to follow along, check the setup instructions [here](https://hackmd.io/@nordic-rse/package-development-julia).

* [Blogpost](https://nordic-rse.org/blog/seminar-report-julia-package/)
* [Recording](https://www.youtube.com/watch?v=oHsLmaHSHd8)
