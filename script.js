/**
 * Lógica simples de roteamento para um SPA (Single Page Application)
 * Alterna as visualizações entre Início, Planos e Dashboard sem recarregar a página.
 */
function switchTab(tabId) {
    // Esconde todas as seções
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.classList.remove('active');
    });

    // Mostra a seção alvo
    const targetView = document.getElementById(tabId);
    if (targetView) {
        targetView.classList.add('active');
    }

    // Comportamento especial para a Dashboard: Esconde o Navbar principal para imersão
    const navbar = document.querySelector('.navbar');
    if (tabId === 'dashboard') {
        // Você pode ocultar a navbar se quiser uma experiência de dashboard limpa
        // navbar.style.display = 'none';
        window.scrollTo(0, 0);
    } else {
        navbar.style.display = 'flex';
    }
}

// Interatividade Sidebar da Dashboard
document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove classe ativa de todos
            sidebarItems.forEach(li => li.classList.remove('active'));
            // Adiciona classe ativa no item clicado
            item.classList.add('active');
        });
    });
});
