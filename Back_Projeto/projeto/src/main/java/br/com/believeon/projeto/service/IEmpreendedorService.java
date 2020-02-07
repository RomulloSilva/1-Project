package br.com.believeon.projeto.service;

import java.util.List;

import br.com.believeon.projeto.model.Empreendedor;

public interface IEmpreendedorService {

	public void adicionarNovoEmpreendedor (Empreendedor empreendedor);
	public Empreendedor recuperarDetalhes(int idEmp);
	public List<Empreendedor> recuperarTodos();
	public void atualizarEmpreendedor(Empreendedor empreendedor);

	public Empreendedor loginEmpreendedor(String emailEmp, String senhaEmp);
	
	
}
