a.show();
a.setSmooth(0);
a.setCutoff(0);

src(s0).invert().luma(0.05).invert().out(o1);
osc(10, 0.05, ()=>Math.PI * a.fft[2]).mult(src(s0)).modulateRotate(voronoi(5)).kaleid(2).layer(src(o1)).out()
render(o0);
