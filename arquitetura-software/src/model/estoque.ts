import { Produto } from "./produto"



class Estoque {

   listaProduto: Produto[] = []

   constructor(produto: Produto[]) {
      this.listaProduto = produto
   }
   
   adProduto(produto: Produto): void {
      this.listaProduto.push(produto)
   }
};