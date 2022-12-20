function feedback() {
	//Variável 'form' recebe lista de elementos do elemento de id 'feedback'
	const form = document.getElementById('feedback');
	//Variável name recebe o valor do campo 'nome', que está contido em 'form'
	const name = form.elements['nome'];
	//Variável feed recebe o valor do campo 'feed', que está contido em 'form'
	const feed = form.elements['feed'];
	//Variável 'nome_usuario' recebe o valor de 'name'
	let nome_usuario = name.value;
	//Variável 'feedback_usuario' recebe o valor de feed
	let feedback_usuario = feed.value;
	//Alert apresentando as informacoes
	alert("Nome: " + nome_usuario + "\n" + "Feedback: " + feedback_usuario + "\n\nSua opinião foi recebida.");
}