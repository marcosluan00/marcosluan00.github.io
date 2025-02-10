export interface Projeto {
    nome: string;
    descricao: string;
    imagem: string;
    github: string;
    demo?: string;
  }
  
  export interface Categoria {
    categoria: string;
    items: Projeto[];
  }
  
  export interface ProjetosData {
    projetos: Categoria[];
  }
  