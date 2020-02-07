package br.com.believeon.projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.believeon.projeto.model.Empreendedor;

import br.com.believeon.projeto.security.Token;
import br.com.believeon.projeto.security.Validacao;
import br.com.believeon.projeto.service.IEmpreendedorService;


@RestController
@CrossOrigin("*")
public class EmpreendedorController {
	
	@Autowired
	private IEmpreendedorService service;
	

	@PostMapping("/empreendedor/novo")
	public ResponseEntity<Empreendedor> incluirNovo(@RequestBody Empreendedor empreendedor){
		service.adicionarNovoEmpreendedor(empreendedor);
		return ResponseEntity.ok(empreendedor);
	}
	
	

	@GetMapping("/empreendedor/todos")
	public ResponseEntity<List<Empreendedor>> listarTodos(){
		return ResponseEntity.ok(service.recuperarTodos());
	}
	
	@GetMapping("/empreendedor/{idEmp}")
	public ResponseEntity<Empreendedor> listarDetalhes(@PathVariable int idEmp){
		Empreendedor empreendedor = service.recuperarDetalhes(idEmp);
		if(empreendedor != null){
			return ResponseEntity.ok(empreendedor);
	}
		return ResponseEntity.notFound().build();
}
	
	@PutMapping("/empreendedor/atualizar")
	public ResponseEntity<Empreendedor> atualizarEmpre(@RequestBody Empreendedor empreendedor){
		service.atualizarEmpreendedor(empreendedor);
		return ResponseEntity.ok(empreendedor);
	}
	
	
	
	@PostMapping("/empreendedor/login")
	public ResponseEntity<Token> autenticaInv(@RequestBody Empreendedor empreendedor){
		Empreendedor emp = service.loginEmpreendedor(empreendedor.getEmailEmp(), empreendedor.getSenhaEmp());
		if (emp != null) {
			Token tk = new Token();
			tk.setConstruindoToken(Validacao.generateTokenEmp(emp));
			return ResponseEntity.ok(tk);
		}
		return ResponseEntity.status(403).build();
	}
	
	
	//Aqui é onde fica o método resposavel por carregar as informações do usuários para todos as páginas qnd logado.
	/**
	 * @param token
	 * @return
	 */
	@GetMapping("/empreendedor/infoDoEmp")
	public ResponseEntity<Empreendedor> getInfoEmp(@RequestParam String token){		
		
		if (token != null) {
			if (Validacao.temPrefixo(token)) {
				Empreendedor emp = Validacao.getEmp(token);
				emp = service.recuperarDetalhes(emp.getIdEmp());
		
				return ResponseEntity.ok(emp);
			}
			return ResponseEntity.status(403).build();
		}
		return ResponseEntity.badRequest().build();
	}

	
}