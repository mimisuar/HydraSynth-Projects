shrinkFactor=4
setResolution(3468 / shrinkFactor, 4624 / shrinkFactor)
s0.initImage("http://localhost:8000/hidden/mimi.jpg")
osc(115, 0.1, 105).modulateRotate(noise(25)).out(o2)
src(s0).thresh(0.4).add(src(o2)).out(o1)
render(o1)
