class Produto{ 

    constructor(){  // inicia objeto de criação lista
        this.id = 1
        this.arrayprodutos =[]
    }

    adddados(){  
        let produto = this.lerosdados()
        if(this.validar(produto) == true) { 
            this.salvar(produto)
        }
        this.listar()
        this.cancelar()
        
    }

    lerosdados(){    
       let produto ={}
       produto.id = this.id
       produto.nomedoiten = document.getElementById('item').value
       produto.precodoiten = document.getElementById('preco').value
       return produto
    }

    validar(produto){    //para mensagem de alerta  com saida falso e true para pegar para outra funçõa
        let msg = ''

        if(produto.nomedoiten ==''){    
            msg += 'Por favor,  insira produto desejado !\n'
        }
    
        if(produto.precodoiten ==''){    
            msg += 'Por favor,  insira preço produto!\n'
        }
    
        if(msg != ''){  
            alert(msg)
            return false
        }
        
        return true
      
    }    

    salvar(produto){    
        this.arrayprodutos.push(produto)
        this.id++
    }

    listar(){   
        let tbody = document.getElementById('tbody') // colocar os produtos em ordem
        tbody.innerText = ''

        for( let i = 0; i < this.arrayprodutos.length; i++){ 

            let tr = tbody.insertRow()               // criar linha

            let td_id = tr.insertCell()              //criar celular
            let td_nome = tr.insertCell()
            let td_preco = tr.insertCell() 
            let td_deletar = tr.insertCell()

            td_id.innerText = this.arrayprodutos[i].id
            td_nome.innerText = this.arrayprodutos[i].nomedoiten
            td_preco.innerText = this.arrayprodutos[i].precodoiten
            let imagem = document.createElement('img') // criar obejo html no javascript :(img)
            imagem.src = 'lixo.png'
            imagem.setAttribute('onclick','produto.deletar('+this.arrayprodutos[i].id+')')
            td_deletar.appendChild(imagem)
        
        }   
    }

    cancelar(){ 
        document.getElementById('item').value = ''
        document.getElementById('preco').value = ''
    }

    deletar(id){  
      let tbody =document.getElementById('tbody')
      for(let i = 0 ; i < this.arrayprodutos.length ; i++){  
          if(this.arrayprodutos[i].id == id){   
            this.arrayprodutos.slice(i , 1)
            tbody.deleteRow(i)
          }  
      }
      
      alert('o iten foi apagado com sucesso')
    }
}

var produto= new Produto()

