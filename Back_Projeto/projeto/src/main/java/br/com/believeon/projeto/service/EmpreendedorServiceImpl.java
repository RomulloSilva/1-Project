package br.com.believeon.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.believeon.projeto.dao.EmpreendedorRepo;
import br.com.believeon.projeto.model.Empreendedor;

@Component
public class EmpreendedorServiceImpl implements IEmpreendedorService{
	
	@Autowired
	private EmpreendedorRepo repo;
	
	public void adicionarNovoEmpreendedor(Empreendedor empreendedor) {
		repo.save(empreendedor); //save = utilizado para insert e update
						  //se a chave primaria ja existir = update
						  //se a chave primaria ainda não existir = insert
	}
	
	
	//recuperando o curso pelo seu id
	public Empreendedor recuperarDetalhes(int idEmp) {
		return repo.findById(idEmp).get();
	}
	
	//recuperando a lista de cursos cadastrados 
	public List<Empreendedor> recuperarTodos(){
		return (List<Empreendedor>) repo.findAll();
		}
	
	public void atualizarEmpreendedor(Empreendedor empreendedor) {
		repo.save(empreendedor);
	}
	
	
	@Override
	public Empreendedor loginEmpreendedor(String emailEmp, String senhaEmp) {
		return repo.findByEmailEmpAndSenhaEmp(emailEmp, senhaEmp);
	}
	
}
