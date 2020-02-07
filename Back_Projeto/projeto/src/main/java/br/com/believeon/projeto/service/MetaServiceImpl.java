/* package br.com.believeon.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.believeon.projeto.dao.MetaRepo;
import br.com.believeon.projeto.model.Meta;
@Component
public class MetaServiceImpl implements IMetaService{
	
	@Autowired
	private MetaRepo repo;
	
	public void adicionarNovoMeta(Meta meta) {
		repo.save(meta);
}
	
	public List<Meta> recuperarTodos(){
		return (List<Meta>) repo.findAll();
	}
	
	
	public Meta RecuperaPorId (int idMeta) {
		return repo.findById(idMeta).get();
	}
	
	public void  atualizarMeta(Meta meta) {
		repo.save(meta);
	}
}

*/