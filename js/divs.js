document.getElementById("teste").onclick = function clone() {
    // removi o qt que não será mais usado e estava sem função como explicarei abaixo
    //var container = document.getElementById("saida1");
    // removi o while, que só estava excluindo os elementos, por isso também aparecia somente um
    
    // conta quantos elementos com classe linha existem
    // isso vai servir para montar o label e o id dos novos elementos
   // var i = document.querySelectorAll(".linha").length;

   // removi o for porque, como qt sempre era igual a 1, nunca contava nada diferente e só executava uma vez
   	var pai = document.getElementById("divs");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var img = document.createElement("img");
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");
    var li6 = document.createElement("li");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    var span4 = document.createElement("span");
    var span5 = document.createElement("span");
    var span6 = document.createElement("span");
    var a1 = document.createElement("a");
    var a2 = document.createElement("a");
    var a3 = document.createElement("a");
    var a4 = document.createElement("a");
    var a5 = document.createElement("a");
    var a6 = document.createElement("a");


    div1.className = "container";
    div2.className = "row align-items-center";
    div3.className = "col-lg-6 pb-30";
    div4.className = "single-carusel row align-items-center";
    div5.className = "col-12 col-md-6 thumb";
    div6.className = "right-contents info";
    img.className = "img-fluid";
    img.src = "img/woman1.jpg";
    a.className = "d-flex";
    span.className = "or";

    p1.innerHTML="Nome:&nbsp";
    p2.innerHTML="Email:&nbsp";
    p3.innerHTML="Skype:&nbsp";
    p4.innerHTML="Matéria:&nbsp";
    p5.innerHTML="Dia(s) disponivel(eis): <br>";
    p6.innerHTML="Turno(s):&nbsp";

    span1.innerHTML="";
    span2.innerHTML="";
    span3.innerHTML="";
    span4.innerHTML="";
    span5.innerHTML="";
    span6.innerHTML="";

    a1.appendChild(p1);
    a1.appendChild(span1);
    a2.appendChild(p2);
    a2.appendChild(span2);
    a3.appendChild(p3);
    a3.appendChild(span3);
    a4.appendChild(p4);
    a4.appendChild(span4);
    a5.appendChild(p5);
    a5.appendChild(span5);
    a6.appendChild(p6);
    a6.appendChild(span6);

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);
    li5.appendChild(a5);
    li6.appendChild(a6);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    div6.appendChild(ul);
    div4.appendChild(img);



   	pai.appendChild(div1);
   	div1.appendChild(div2);
	div2.appendChild(div3);
	div3.appendChild(div4);
	div4.appendChild(div5);
	div5.appendChild(div6);
	
}
	
	






/*
    var label = document.createElement("label");
    div1.className = "linha";
    div2.className = "coluna1";
    div3.className = "coluna2";
    label.htmlFor = (i + 1)
    label.textContent = "Texto " + (i + 1) + ": ";
    input.className = (i + 1);
    input.name = "inp";
    input.type = "text";
    container.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(label);
    div1.appendChild(div3);
    div3.appendChild(input);





					<div class="">
						<div class="">
							<div class="">
								<div class="">
									<img class="img-fluid" src="img/woman1.jpg" alt="">
								</div>
								<div class=" right-contents info">
									<ul>
										<li>
											<a class="d-flex" href="#">
												<p>Nome:&nbsp</p> 
												<span class="or">Clara Carvalho</span>
											</a>
										</li>
										<li>
											<a class=" d-flex" href="#">
												<p>Email:&nbsp</p>
												<span>pfana@gmail.com</span>
											</a>
										</li>
										<li>
											<a class=" d-flex" href="#">
												<p>Skype:&nbsp</p>
												<span>71 8888-0000</span>
											</a>
										</li>
										<li>
											<a class=" d-flex" href="#">
												<p>Matéria:&nbsp </p>
												<span>Redação</span>
											</a>
										</li>
										<li>
											<a class="d-flex" href="#">
												<p>Dia(s) disponivel(eis): <br> Seg, Qua, Sáb	
											</a>
										</li>
										<li>
											<a class=" d-flex" href="#">
												<p>Turno(s):&nbsp </p>
												<span>Vespertino</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>