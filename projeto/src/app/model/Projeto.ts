import { Categoria } from './Categoria';
import { Empreendedor } from './Empreendedor';
import { Investidor } from './Investidor';

export class Projeto{

	public idProj: number;
	public nomeProj: string;
	public descricaoProj: string;
	public valorProj: string;
	public linkFoto: string;
	public categoriaProjeto: Categoria;
	public dono: Empreendedor;
	public apoiador: Investidor;
	




	 
}