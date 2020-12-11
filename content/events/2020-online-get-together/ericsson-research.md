+++
title = "Ericsson Research and Distributed Applications in the Cloud"
template = "session.html"
[extra]
authors = "Andrew Williams"
session = "3.2"
duration = "15 min"
+++

Ericsson has a long history in the telecommunications industry dating back more
than a hundred years, but with traditional network infrastructure becoming
increasingly virtualized and software defined, and the rise of the cloud, both
the way we work and the skills we require is rapidly changing. This change is
being rapidly driven by the need to collaboratively develop code that can be
meaningfully shared with stakeholders.

This talk illustrates the inspiration that Ericsson Research Cloud Systems and
Platforms (CSP) is taking from the Research Software Engineering community and
provides an introduction to one concept for a distributed application runtime
that we are working on.

Slides: <https://github.com/nordic-rse/meetups/blob/main/2020/ericsson-distributed.pdf>

---

#### Questions and comments

- There are already long-standing software stacks to do distributing computing. How are you interacting with these existing projects? I do hate to continual pound this drum but [HTCondor](https://htcondor.readthedocs.io/en/latest/overview/exceptional-features.html) written by the folks in [Wisconsin](https://chtc.cs.wisc.edu/) have been doing this sort of platform agnostic distributed computing for a long time now.
- Any plans for running on HPC and how that would work?
    - A: Currently looking for stakeholders write now for research projects. Under discussion and debating whether the software should be open sourced.
-  In the era of GDPR and sensitive data how are you seeing the ocean of computing working with localisation requirements that these regulations impose?
    - A: Not working with the infrastructure but specifying locations where stuff should run.
- Comment: We have quite currious application at particle accelerators: the guys making "particle re-energiteze" devices for the particle accelerator started using networks/clouds of *smart-devices*. So instead of well-defined dedicated networks the control system is running over wifi.
- Where does Ericsson see potential benefits in building links with the RSE community? Would this, for example, ultimately be as a route to build users of specific codes, would it be as a route to get/share technical expertise and input from the RSE community, etc? Are there other drivers?
    - This has to be a two-way partnership, giving back. Trying to get people to better communicate both internally as well as across stake-holder groups. The Met-Office showed how training is important for getting researchers up to speed on making production code and the unique requirements this entails. An on-boarding program for getting new hires acclimatized to the standards of the projects is very important. All code should be group-code. Beware of personalized ownership.
- Code ownership is a particularly tricky point, both in Sweden and elsewhere.
    - This is a very interesting topic that is getting more attention recently. Who owns the intellectual property for e.g. the code developed to do research at a university? Universities have a policy that can seem quite aggressive in the way they claim ownership. It was discussed that teachers can fall under a special clause, but that researchers and students do not. I'm not sure if the latter is true, students (from bachelor up to and including postdocs) also have a special clause, and the tools they develop to "conduct their studies" (including thesis work and postdoc work) are their own. At least this seems to be the case at my university. For researchers and other staff, the situation looks different. Please comment if you have any experience or encountered a different policy.
- Patents & Papers as measures for success, but are these actually good measures for progress and in particular the value of collaborative work?


