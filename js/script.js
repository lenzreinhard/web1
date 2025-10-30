let cadastro_logo = document.getElementById("cadastro_logo");
let url_logo = document.getElementById("url_logo");
let cadastro_back_photo = document.getElementById("cadastro_back_photo");
let url_back_photo = document.getElementById("url_back_photo");

function Cadastra_Ong(event)
{
    //event.preventDefault();

    let nome = document.getElementById("cadastro_nome").value;
    let nome_ong = document.getElementById("cadastro_nome_ong").value;
    let cadastro_cnpj = document.getElementById("cadastro_cnpj").value;
    let cadastro_email = document.getElementById("cadastro_email").value;
    let cadastro_telefone = document.getElementById("cadastro_telefone").value;
    let cadastro_nascimento = document.getElementById("cadastro_nascimento").value;

    const lista = JSON.parse(localStorage.getItem("cadastra_ong")) || [];
    const ong = {
        nome:nome,
        nome_ong:nome_ong,
        cadastro_cnpj:cadastro_cnpj,
        cadastro_email:cadastro_email,
        cadastro_telefone:cadastro_telefone,
        cadastro_nascimento:cadastro_nascimento,
        url_logo:url_logo.value,
        url_back_photo:url_back_photo.value
    };
    lista.push(ong);

    localStorage.setItem("cadastra_ong", JSON.stringify(lista));

}


cadastro_logo.addEventListener("change", function() {
  const file = this.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    url_logo.value = url;
  }
});


cadastro_back_photo.addEventListener("change", function() {
  const file = this.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    url_back_photo.value = url;
  }
});


window.onload = function () {
    const lista = JSON.parse(localStorage.getItem("cadastra_ong")) || [];

    const ongs = this.document.getElementById("ongs");

    lista.forEach(ong => {
      const option = document.createElement("option");
      option.value = ong.nome_ong;      
      option.textContent = ong.nome_ong; 
      ongs.appendChild(option);
    });


    const projetos = JSON.parse(localStorage.getItem("divulgue_ong")) || [];

    const projetos_ongs = this.document.getElementById("projetos_ongs");

    projetos.forEach(projeto => {
      const option = document.createElement("option");
      option.value = projeto.divulgue_nome_projeto;      
      option.textContent = projeto.divulgue_nome_projeto;
      projetos_ongs.appendChild(option);
    });

}

function Donate_Ong(event)
{
    //event.preventDefault();

    let doe_ong = document.getElementById("doe_ong").value;
    let doe_nome = document.getElementById("doe_nome").value;
    let doe_valor = document.getElementById("doe_valor").value;

    const lista = JSON.parse(localStorage.getItem("donate_ong")) || [];
    const ong = {
        doe_ong:doe_ong,
        doe_nome:doe_nome,
        doe_valor:doe_valor
    };
    lista.push(ong);
    localStorage.setItem("donate_ong", JSON.stringify(lista));
}





function Divulgue_Ong(event)
{
    //event.preventDefault();

    let divulgue_ong = document.getElementById("divulgue_ong").value;
    let divulgue_nome_projeto = document.getElementById("divulgue_nome_projeto").value;
    let divulgue_apresentacao = document.getElementById("divulgue_apresentacao").value;

    const lista = JSON.parse(localStorage.getItem("divulgue_ong")) || [];
    const ong = {
        divulgue_ong:divulgue_ong,
        divulgue_nome_projeto:divulgue_nome_projeto,
        divulgue_apresentacao:divulgue_apresentacao
    };
    lista.push(ong);
    localStorage.setItem("divulgue_ong", JSON.stringify(lista));
}

function Change_Ong(event)
{
    //event.preventDefault();
    const projetos = document.getElementById("sobre_nome_projeto").value;
    if (projetos!=null && projetos!="")
    {
        const proj = JSON.parse(localStorage.getItem("divulgue_ong")) || [];
        proj.forEach(p=>{
            if (p.divulgue_ong==event.target.value && p.divulgue_nome_projeto ==projetos)
            {
                const apr = document.getElementById("sobre_apresentacao");
                apr.value = p.divulgue_apresentacao;
                
            }
        });
    }
}

function Change_Projeto(event)
{
    //event.preventDefault();
    const ong = document.getElementById("sobre_ong").value;
    if (ong!=null && ong!="")
    {
        const proj = JSON.parse(localStorage.getItem("divulgue_ong")) || [];
        proj.forEach(p=>{
            if (p.divulgue_nome_projeto==event.target.value && p.divulgue_ong ==ong)
            {
                const apr = document.getElementById("sobre_apresentacao");
                apr.value = p.divulgue_apresentacao;
            }
        });
    }
}

function Contato_Ong(event)
{
    //event.preventDefault();
    let trabalhe_nome = document.getElementById("trabalhe_nome").value;
    let trabalhe_ong = document.getElementById("trabalhe_ong").value;
    let trabalhe_nome_projeto = document.getElementById("trabalhe_nome_projeto").value;
    let trabalhe_cpf = document.getElementById("trabalhe_cpf").value;
    let trabalhe_email = document.getElementById("trabalhe_email").value;
    let trabalhe_telefone = document.getElementById("trabalhe_telefone").value;
    let trabalhe_nascimento = document.getElementById("trabalhe_nascimento").value;

    const lista = JSON.parse(localStorage.getItem("contato_ong")) || [];
    const ong = {
        trabalhe_nome:trabalhe_nome,
        trabalhe_ong:trabalhe_ong,
        trabalhe_nome_projeto:trabalhe_nome_projeto,
        trabalhe_cpf:trabalhe_cpf,
        trabalhe_email:trabalhe_email,
        trabalhe_telefone:trabalhe_telefone,
        trabalhe_nascimento:trabalhe_nascimento
    };
    lista.push(ong);

    localStorage.setItem("contato_ong", JSON.stringify(lista));
}