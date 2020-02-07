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


import br.com.believeon.projeto.model.Investidor;
import br.com.believeon.projeto.security.Token;
import br.com.believeon.projeto.security.Validacao;
import br.com.believeon.projeto.service.IInvestidorService;

@RestController
@CrossOrigin("*")
public class InvestidorController {

	@Autowired
	private IInvestidorService service;

	@PostMapping("/investidor/novo")
	public ResponseEntity<Investidor> incluirNovo(@RequestBody Investidor investidor) {
		service.adicionarNovoInvestidor(investidor);
		return ResponseEntity.ok(investidor);
	}

	@GetMapping("/investidor/todos")
	public ResponseEntity<List<Investidor>> mostrarTodos() {
		return ResponseEntity.ok(service.recuperarTodos());
	}

	@GetMapping("/investidor/{idInv}")
	public ResponseEntity<Investidor> mostrarInvPorId(@PathVariable int idInv) {
		Investidor a = service.recuperarInvPorId(idInv);
		if (a != null) {
			return ResponseEntity.ok(a);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping("/investidor/atualizar")
	public ResponseEntity<Investidor> atualizarInvest(@RequestBody Investidor investidor) {
		service.atualizarInvestidor(investidor);
		return ResponseEntity.ok(investidor);
	}
	
	
	
	
	@PostMapping("/investidor/login")
	public ResponseEntity<Token> autenticaInv(@RequestBody Investidor investidor){
		Investidor inv = service.loginInvestidor(investidor.getEmail(), investidor.getSenha());
		if (inv != null) {
			Token tk = new Token();
			tk.setConstruindoToken(Validacao.generateTokenInv(inv));
			return ResponseEntity.ok(tk);
		}
		return ResponseEntity.status(403).build();
	}
	
	
	//Aqui é onde fica o método resposavel por carregar as informações do usuários para todos as páginas qnd logado.
	@GetMapping("/investidor/infoDoInv")
	public ResponseEntity<Investidor> getInfoInv(@RequestParam String token){		
		
		if (token != null) {
			if (Validacao.temPrefixo(token)) {
				Investidor inv = Validacao.getInv(token);
				inv = service.recuperarInvPorId(inv.getIdInv());
				return ResponseEntity.ok(inv);
			}
			return ResponseEntity.status(403).build();
		}
		return ResponseEntity.badRequest().build();
	}

}
