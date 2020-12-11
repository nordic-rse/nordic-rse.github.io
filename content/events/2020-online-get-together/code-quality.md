+++
title = "Is it possible to make code quality more important than the number of published papers in academia?"
template = "session.html"
[extra]
authors = "Sunniva Indrehus"
session = "3.3"
+++

The code quality in academia has a bad reputation. A global measure of the quality of a computational-oriented research group is typically based on the number of published papers and not a stable and well organized code. The latter is crucial for the further development of the scientific quality of the group. Is it possible to make code quality more important than the number of published papers in academia?

Interesting questions that are closely related to my title:
- How to construct a sustainable workflow for groups working where someone has a user and someone a developer perspective? Where goes the line between what type of knowledge is expected from the users and the maintainers?
- Who has the responsibility to teach the academic staff about best software practices? Is it the individual doing computational stuff he(r)self?
- How can the studying programs at the universities speed up and keep track of the “standard” developments in the business? For instance: in 2020 everybody doing some kind of development should be aware of version control and testing.


Slides: <https://drive.google.com/file/d/1lnveZ3flvTixgIDv2kwKDIhL0saXFE1b/view?usp=sharing>

---

#### Questions and comments



Follow-up questions: 
- Does it make sense to move in this direction?
 - Better coding culture and education ?
  - Incentivisation ?
  
* code quality vs code volume: Is it worth putting effort in going open source? -> ongoing debate in many places
* github: a representation of the university towards the world, should be showcasing the good
* we may not be experts but we should be using the tools provided (version control, testing)
-> "you wouldn't trust an uncalibrated thermometer"
* pressure form funding agency to produce research results and not code, hard to try to find excuses to make good code an output
* code should be a part of research proposal, otherwise there is 'not enough time'
* often severity of the problem is not seen by professors
* people get by by producing adequate code and get by and get funding, that does not motivate people to do testing etc
* professors need to know and understand the problem (often they do not do any coding (anymore) and forget)
* later additions to 'bad code' leads to problems which get noticed -> explanation to the 'higher level' how we could now save time with better code from the beginning
* Lots of time pressure in research projects where improving and making code reproducible is not focussed on
* no courses on how to write research code :( or not many
* stuff like software engineering is often one of the first courses to be dropped when money runs out. Often because 'higher levels' do not know about the importance
* new field: not much old stuff to build on top, no real need for sharing. But not anymore the case. 
* Catchin up takes time, no time to reproduce everything

How can we find the 'paper' of coding?
* github stars
* <https://joss.theoj.org/>
<https://openresearchsoftware.metajnl.com/>
<https://www.journals.elsevier.com/softwarex>,  software wrapped in paper for traditional metrics, good start but does not solve the problem
* one citable paper for many years of developing the software? -> need to be judged on different scale
* Standard research outputs are not the only thing that research is measured by anymore, need to 'jump on the train'
* continuous necessity for novelty, all metrics problematic, potential metrics: how many people are using your product? -> if many people use it, it is valuable to maintain and update software, supporting a large community
* usage metrics as a way of demonstrating impact -> hard to make funding bodies recognize that
* in ok it is now pushed to be recognized, slowly building up now, took several years to build evidence base of usage
* UK’s Research Excellence Framework: <https://www.ref.ac.uk/>
* importance of being able to read documentation, you need to know where to look and how to do (not everyone can do that)
* what about promoting the importance of releasing often? It is a measure of continuous effort, something that writing one-off papers doesn't do, and even small, bug-fixing patches are important IMO. The flip side is it could encourage busy-work, but I still think it's worth it. 
* all metrics can break -> wide variety of metrics for value is important
* some people work in a field where software is not used much by other people, but may be very useful for your colleagues -> citation supports more novelty than quality
* no tasks anymore that can be solved by one person. As a researcher, pair up with an RSE to solve a problem, paper together. win-win. can also help your career.
* people are rewarded for bad code by keeping their job through being the only person who can actually read and work with their code, no incentive to make code better -> better long term management needed
* today no one is indispensible, dont hire people who think they are
* make sure multiple people can 'keep the server running', collaborate
* -> culture change needed
* need for basic education (version control etc) of students, code review
* but people do not like to find out / being pointed put as having written bad code, creates high barrier, but one one need to get over 
* when sharing code, poeple will get used to it, as its part of development
* Coderefinery as a good place to send new phds students to learn version control and how collaborative coding works -> no merge without someone else reading the code first
* it's all research, you never know which part will become part of your codebase, turns into something big -> hard to go back later, so its important to start early with reviewing, version control etc
* So maybe we should have some sense of "continual review" like "continuous integration" 
* writing test framework takes time but is worth it in the long run
* do what you want in your own code,but you will need to 'act like a software engineer' when working with others
* compared to how long it takes to make things work, test implementation does not take too much time
* courses such as coderefinery are not appealing to some people who think of themselves knowing git* enough for current use, 'bubble workers', so they never learn how it could be also with branches in own code
* 'onboarding package' as in how we do things here is lacking in academia, not everywhere though: example:  <https://scicomp.aalto.fi/aalto/welcomeresearchers/>

