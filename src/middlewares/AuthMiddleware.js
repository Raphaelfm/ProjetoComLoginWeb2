const isAutheticated = true;
const isManager = false;

function AuthMiddleware(req, res, next) {
  if (isAutheticated) {
    next();
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
}

function ManagerMiddleware(req, res, next) {
  if (isManager) {
    next();
  } else {
    res.status(405).json({ message: "Not Allowed" });
  }
}

const users = [  { email: 'usuario2@exemplo.com', password: 'senha1' },
  { email: 'usuario2@exemplo.com', password: 'senha2' },];

function LoginMiddleware(req, res, next) {
  const { email, password } = req.body;
  console.log(email, password);
  
  // Verificar se o usuário e senha estão corretos
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    // Inicializar o objeto req.session, se necessário
    if (!req.session) {
      req.session = {};
    }

    // Definir a propriedade user no objeto req.session
    req.session.user = { email };

    console.log("Login bem sucedido!");

    // Redirecionar o usuário para a página logado
    res.redirect('/logado');

    // Chame a próxima função de middleware
    next();    
  } else {
    // Se as credenciais estiverem incorretas, retorne um erro 401 (não autorizado)
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
}

module.exports = { AuthMiddleware, ManagerMiddleware, LoginMiddleware };
