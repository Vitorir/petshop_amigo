import React from "react";

function HomePage() {
  return (
    <div>
      {/* Cabeçalho */}
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title"> Petshop <span className="title-brand">MelhorAmigo</span></h1>
            <h2 className="subtitle">Construindo Laços, Cuidando de Patas</h2>
          </div>
        </div>
      </section>
      <div className="section"></div> {/* Espaço em branco entre seções */}
      
      {/* Seção de Limpeza */}
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h3 className="title is-3 has-text-success">
                Limpeza e Higienização
              </h3>
              <p className="has-text-grey-dark">
                Garantimos que seu pet tenha um ambiente seguro e tranquilo
                durante o processo de limpeza e higienização completa. Nossos
                profissionais proporcionam um ambiente seguro e confortável para
                o seu amigo.
              </p>
            </div>
            <div className="column is-6">
              {/* Imagem relacionada à limpeza */}
              <img src="imagem_limpeza.jpg" alt="Limpeza e Higienização" />
            </div>
          </div>
        </div>
      </section>
      <div className="section"></div> {/* Espaço em branco entre seções */}
      {/* Seção de Tosa */}
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h3 className="title is-3 has-text-success">Tosa Profissional</h3>
              <p className="has-text-grey-dark">
                Nossos tosadores experientes garantem que seu pet tenha um
                visual impecável, além de cuidados especiais como limpeza de
                ouvidos e corte de unhas. Seu pet merece um tratamento de
                qualidade.
              </p>
            </div>
            <div className="column is-6">
              {/* Imagem relacionada à tosa */}
              <img src="imagem_tosa.jpg" alt="Tosa Profissional" />
            </div>
          </div>
        </div>
      </section>
      <div className="section"></div> {/* Espaço em branco entre seções */}
      {/* Seção de Venda de Ração */}
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h3 className="title is-3 has-text-success">
                Venda de Ração e Alimentos
              </h3>
              <p className="has-text-grey-dark">
                Oferecemos uma ampla variedade de rações de alta qualidade e
                alimentos balanceados, adaptados às necessidades individuais de
                cada animal. Conte com nossos especialistas para escolher a
                melhor opção para o seu amiguinho.
              </p>
            </div>
            <div className="column is-6">
              {/* Imagem relacionada à venda de ração */}
              <img src="imagem_racao.jpg" alt="Venda de Ração e Alimentos" />
            </div>
          </div>
        </div>
      </section>
      {/* Destaque para Promoções e Ofertas Especiais */}
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h3 className="title is-3">Promoções Especiais</h3>
            <p className="subtitle is-5">
              Não perca nossas ofertas exclusivas para cuidar do seu pet.
            </p>
            <div className="columns is-vcentered">
              <div className="column is-6">
                <h4 className="title is-4">Oferta da Semana</h4>
                <p>
                  Compre uma sessão de tosa e ganhe um banho relaxante de
                  cortesia!
                </p>
              </div>
              <div className="column is-6">
                <h4 className="title is-4">Desconto em Ração</h4>
                <p>
                  Ganhe 10% de desconto em todas as rações premium este mês.
                </p>
              </div>
            </div>
            <a href="/promocoes" className="button is-primary is-rounded">
              Veja Todas as Promoções
            </a>
          </div>
        </div>
      </section>

      {/* Botão de Chamada para Ação (CTA) */}
      <section className="section">
        <div className="container has-text-centered">
          <h3 className="title is-3">Descubra Mais</h3>
          <p className="subtitle is-5">
            Explore nossos produtos e serviços para cuidar do seu melhor amigo.
          </p>
          <a
            href="/pagina_de_produtos"
            className="button is-primary is-rounded"
          >
            Veja Nossos Produtos
          </a>
        </div>
      </section>
      {/* Rodapé */}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>&copy; 2023 Melhor Amigo Petshop. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
