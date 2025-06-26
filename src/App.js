import React from 'react';
import './App.css';
import { Container, Row, Col, Button, Card, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="#home">Oğuzhan Bilgi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">Hakkımda</Nav.Link>
              <Nav.Link href="#projects">Projeler</Nav.Link>
              <Nav.Link href="#contact">İletişim</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="hero-section text-center">
        <Container>
          <h1 className="display-4">Merhaba, ben Oğuzhan 👋</h1>
          <p className="lead">Bilgisayar Programcılığı Mezunu | Full Stack Developer Adayı</p>
          <Button variant="outline-light" href="#projects">Projelerime Göz At</Button>
        </Container>
      </header>

      <section id="about" className="py-5 bg-dark text-light">
        <Container>
          <h2 className="text-center mb-4">Hakkımda</h2>
          <p>
            2024 yılında Recep Tayyip Erdoğan Üniversitesi Bilgisayar Programcılığı bölümünden mezun oldum. Temmuz-Ağustos 2024 döneminde JForce Bilişim Teknolojileri A.Ş. firmasında staj yaptım. Bu süreçte bir ay içerisinde full-stack bir uygulama geliştirdim. Takım çalışması, sorumluluk alma ve ekip içi iş paylaşımı konularında değerli deneyimler kazandım.
          </p>
          <p><strong>Kullandığım Teknolojiler:</strong> Spring Boot, Java, MySQL, Maven, Tomcat, React</p>
        </Container>
      </section>

      <section id="projects" className="py-5 bg-secondary text-light">
        <Container>
          <h2 className="text-center mb-4">Projeler</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="bg-dark text-light project-card">
                <Card.Body>
                  <Card.Title>HR Uygulaması</Card.Title>
                  <Card.Text>
                    Kullanıcı giriş sistemi, rol bazlı menü kontrolü, personel ve envanter yönetimi içeren full-stack uygulama.
                  </Card.Text>
                  <Card.Text>
                    <strong>Teknolojiler:</strong> Spring Boot, React, MySQL
                  </Card.Text>
                  <Button variant="outline-light" href="https://github.com/oguzhanbilgi">GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="py-5 bg-dark text-light">
        <Container>
          <h2 className="text-center mb-4">İletişim</h2>
          <p className="text-center">LinkedIn: <a href="https://www.linkedin.com/in/oğuzhan-bilgi-09315b254/" className="text-info">Profili Gör</a></p>
          <p className="text-center">GitHub: <a href="https://github.com/oguzhanbilgi" className="text-info">oguzhanbilgi</a></p>
          <p className="text-center">E-posta: <a href="mailto:oguzhan-bilgi@hotmail.com" className="text-info">oguzhan-bilgi@hotmail.com</a></p>
        </Container>
      </section>

      <footer className="text-center text-light py-3 bg-black">
        © 2025 Oğuzhan Bilgi
      </footer>
    </div>
  );
}

export default App;
