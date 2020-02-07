package br.com.believeon.projeto.security;
import javax.xml.bind.DatatypeConverter;

import br.com.believeon.projeto.model.Administrador;
import br.com.believeon.projeto.model.Empreendedor;
import br.com.believeon.projeto.model.Investidor;

public class Validacao {

	private static final String PREFIXO = "&BELIEVEON&;";






	/*Aqui codificamos o token*/
	public static String generateToken(Administrador administrador) {
	String texto = PREFIXO + administrador.toString();
	String Token = DatatypeConverter.printHexBinary(texto.getBytes());
	return Token;
	}

	/*Aqui codificamos o token*/
	public static String generateTokenEmp(Empreendedor empreendedor) {
	String texto = PREFIXO + empreendedor.toString();
	String Token = DatatypeConverter.printHexBinary(texto.getBytes());
	return Token;
	}
	
	/*Aqui codificamos o token*/
	public static String generateTokenInv(Investidor investidor) {
	String texto = PREFIXO + investidor.toString();
	String Token = DatatypeConverter.printHexBinary(texto.getBytes());
	return Token;
	}
	
	
	
	
	
	
	
	
	
	/*Método que decodifica o token e verifica se o prefixo é valido*/
	public static boolean temPrefixo(String token) {
		byte[] matriz = DatatypeConverter.parseHexBinary(token);
		String novoTexto = new String(matriz);
		System.out.println("Debug = "+novoTexto);
		if(novoTexto.startsWith(PREFIXO)) {
			return true;
		}
		return false;
	}
	
	public static Empreendedor getEmp(String token) {
		byte[] vetor = DatatypeConverter.parseHexBinary(token);
		//// converte o código hexadecimal de volta para texto.
		String novaString = new String(vetor);
		String partes[] = novaString.split(";");
		
		Empreendedor c = new Empreendedor();
		c.setIdEmp(Integer.parseInt(partes[1]));
		c.setNomeEmp(partes[2]);
		c.setEmailEmp(partes[3]);
		
		return c;
	}
	
	
	public static Investidor getInv(String token) {
		byte[] vetor = DatatypeConverter.parseHexBinary(token);
		//// converte o código hexadecimal de volta para texto.
		String novaString = new String(vetor);
		String partes[] = novaString.split(";");
		
		Investidor c = new Investidor();
		c.setIdInv(Integer.parseInt(partes[1]));
		c.setNome(partes[2]);
		c.setEmail(partes[3]);
		//c.setImgInv(partes[4]);
		return c;
	}
	

}