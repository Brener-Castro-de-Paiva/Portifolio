// Conteúdo dos caminhos
const pathsContent = {
    juridico: {
        title: 'Trajetória Jurídica',
        content: `
            <h3>Formação Acadêmica</h3>
            <p>
                Graduado em <strong>Direito pelo Centro Universitário UniFOA em 2011</strong>, 
                atualmente cursando pós-graduação em Direito e Processo do Trabalho.
            </p>

            <h3>Atuação Profissional</h3>
            <p>
                Exerce a advocacia com dedicação, empenho e resiliência de forma ampla, 
                atuando em diversos ramos do direito com expertise consolidada.
            </p>

            <h3>Áreas de Especialização</h3>
            <ul>
                <li><strong>Direito Civil:</strong> Contratos, responsabilidade civil, família e sucessões</li>
                <li><strong>Direito Previdenciário:</strong> Aposentadorias, pensões e benefícios</li>
                <li><strong>Direito Tributário:</strong> Planejamento tributário e contencioso fiscal</li>
                <li><strong>Direito do Consumidor:</strong> Defesa dos direitos do consumidor</li>
            </ul>

            <h3>Abordagem Integrada</h3>
            <p>
                A atuação prática permite uma visão integrada das diversas áreas do direito, 
                oferecendo soluções completas e eficientes para casos complexos que envolvem 
                múltiplas especialidades jurídicas.
            </p>

            <h3>Diferenciais</h3>
            <ul>
                <li>Mais de 14 anos de experiência na advocacia</li>
                <li>Atendimento personalizado e humanizado</li>
                <li>Atuação estratégica e orientada a resultados</li>
                <li>Conhecimento interdisciplinar em Direito e Tecnologia</li>
            </ul>
        `
    },
    tecnologia: {
        title: 'Trajetória Tecnológica',
        content: `
            <h3>Paixão por Tecnologia</h3>
            <p>
                Sempre foi um entusiasta de tecnologia, buscando constantemente a inovação 
                e a aplicação de soluções tecnológicas para otimizar processos.
            </p>

            <h3>Formação em Tecnologia</h3>
            <p>
                Graduado em <strong>Sistemas de Informação pela Universidade Candido Mendes em 2025</strong>, 
                unindo o conhecimento jurídico com competências técnicas em desenvolvimento de software.
            </p>

            <h3>Competências Técnicas</h3>
            <ul>
                <li>Desenvolvimento de Sistemas e Aplicações Web</li>
                <li>Análise e Modelagem de Sistemas</li>
                <li>Banco de Dados e Gestão de Informações</li>
                <li>Programação e Lógica Computacional</li>
                <li>Automação de Processos</li>
            </ul>

            <h3>Visão Inovadora</h3>
            <p>
                A combinação única entre Direito e Tecnologia permite desenvolver soluções 
                inovadoras que modernizam a prática jurídica, tornando-a mais eficiente, 
                acessível e alinhada com as demandas do mundo digital.
            </p>

            <h3>Legal Tech</h3>
            <p>
                Especialista em Legal Tech, desenvolvendo ferramentas e sistemas que 
                auxiliam na gestão de escritórios jurídicos, automação de documentos, 
                análise de dados legais e muito mais.
            </p>

            <h3>Futuro da Advocacia</h3>
            <ul>
                <li>Transformação digital da prática jurídica</li>
                <li>Desenvolvimento de soluções personalizadas</li>
                <li>Integração entre conhecimento jurídico e tecnológico</li>
                <li>Inovação constante nos serviços prestados</li>
            </ul>
        `
    }
};

// Função para mostrar o modal com o conteúdo do caminho escolhido
function showPath(pathType) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    const pathData = pathsContent[pathType];
    
    modalBody.innerHTML = `
        <h2>${pathData.title}</h2>
        ${pathData.content}
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Animação suave ao rolar a página
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.path-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Efeito de partículas no fundo (opcional)
function createParticles() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        document.body.appendChild(particle);
    }
}

// Adicionar animação de float para partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0.8;
        }
    }
`;
document.head.appendChild(style);

// Inicializar partículas quando a página carregar
window.addEventListener('load', createParticles);