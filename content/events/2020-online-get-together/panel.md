+++
title = "Panel discussion: RSE careers and their position in academia"
template = "session.html"
[extra]
authors = "moderated by Samantha Wittke"
session = "3.1"
+++

Panelists:
- Gudrun Lotze
- Patric Holmvall
- Keijo Heljako
- Ella Bingham
- Konstantin Stadler
- Peter Schmidt
- Jeremy Cohen


Topics:
- What is your story?
- RSE careers
- RSE and academia
- ... 



---

#### Questions and comments


* Comment: In Sweden within the UPPMAX hpc facility (I dont know how it is handled at other centers within the SNIC org) and NBIS organisations Application experts and RSE (devlopers) are now mainly hired fulltime and not temporary while there are still people hired with shorter contracts as exception. It has been recognized that its very hard to retain talent if you only hire shortterm/temporary contracts.

* Comment: really liked the point about having and getting time for "pet project". not only to have something to show later on CV but also to stay current and motivated and to learn "for free".+5
    * I started one early this year and told my boss about it a few months later. He enjoyed the initiative, then told me a heartwarming story about investing in projects that _just might_ become a big thing one day. Plus, I also think that this sort of initiative can bring in ideas for an RSE to apply for funding, which is always welcome.
      * yes! a number of established projects started as side projects and these can often open up funding opportunities and cross-discipline collaborations. 
    * There is a good model at my work: 70+20+10. spend 70% on regular work, 20% learning something new that will make your work better, 10% learning something new that is good for you but does not have to be directly work/project related.+1

* Comment: perhaps another way to make scientific software as "important" as research papers is to always try to publish it in a popular repository (CRAN, PyPI, etc.). Not sure how applicable that would be for software that are not R or Python packages, though.
  * yes, also connecting to yesterday's talk. this can really help using standard practices. publishing packages always felt/sounded difficult/scary until I tried it.

* Comment : Excellent point Patric about the standards to which we need to hold resarch software to be able to keep it at the same level as experimental setups and methodologies +3
    * May we get more details about such standards so we can register them on this document?
        * **Recognizing methodology development:** I'm thinking for example of my colleagues building or working on experimental setups and detectors (e.g. at CERN, GSI and other institutes). They spend the majority of their PhD/Postdoc building setups and developing methodology, similar to how others might spend a lot of their time developing and building software. They have several journals where they can publish their work and get recognized for their contribution, which they base their PhD thesis/project upon. There are of course many journals where software and research software can be published, but at least in my experience, I could not build my PhD thesis or project on this work, since there is a complete focus on the research. The attitude is generally that code is just methodology, "it should just work" and it is not important how it works. I think that this viewpoint is wrong. If you do significant contributions, maybe even breakthroughs, this should be recognized and valued.
        * **Testing:** Nobody would trust experimental equipment that has not been calibrated or tested. Building an experimental setup, it is therefore assumed that you will have to spend time on calibrating and testing. Sadly, the same cannot in general be said about research codes (again, this is in my experience, but I've heard others commenting the same in this conference). As an example, I took over a large code that was lacking testing and proper documentation. As I started adding unit tests, regression/physics tests, the senior PI was starting to get impatient because they wanted to see research. Even though several important bugs had been discovered that put the validity of results in jeopardy, I was told "enough tests already". An issue is that PIs might be more focused on research and know very little about writing sustainable codes; they just want them to work. I have a hard time believing that the same would happen in the building of an experimental setup (sure, there are horror stories from experiments, but this is far from the norm).
        * **Reproducibility:** Reproducibility is another issue. It is often completely acceptable to neglect mentioning implementation/code etc in methods sections, as long as you describe e.g. the physics theory you are using. Even if the code is mentioned, it is rarely made open access, and when it is made open access, it is often hard to use it to reproduce the results. This goes against the core tenet that research should be reproducible. There needs to be more acceptance for the time it takes to make a code re-usable. Of course, everyone cannot re-build a detector for the Large Hadron Collider at home, but at least a great deal of time and effort in spent in describing how said detector works and can be built. +1
        * **TL;DR:** So these are some of the main points (recognition of code/methodology development, testing, reproducibility) when I make the comparison between experiments and "numerical experiments", and when I say that they should be held to the same standards. If we make this analogy, it might be easier to promote RSE-related work as not just important but crucial, and to have a greater acceptance of time spent doing these tasks for e.g. PhDs and postdocs.+1
        - Excellent point to compare software development with experimental method development. How can something lead to good data if bugs are in the code and nobody verifies them? Reproducibility is also the key to prevent wrong conclusions.  I like to mention PyFAI. It is an anlysis tool, it is published on github, and is developed by a core team, but users, scientist can contribute to its development. It was published also in traditional publications.

* Comment: great point about mentoring groups and connecting to others. +1
