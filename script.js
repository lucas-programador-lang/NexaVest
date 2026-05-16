/**
 * Lógica de roteamento SPA mantida e aprimorada
 */
function switchTab(tabId) {
    // Se tentar acessar abas que agora são arquivos físicos, faz o redirecionamento correto
    if (tabId === 'dashboard') {
        window.location.href = 'dashboard.html';
        return;
    }
    if (tabId === 'login') {
        window.location.href = 'login.html';
        return;
    }
    if (tabId === 'register') {
        window.location.href = 'register.html';
        return;
    }

    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.classList.remove('active');
    });

    const targetView = document.getElementById(tabId);
    if (targetView) {
        targetView.classList.add('active');
    }

    const navbar = document.getElementById('main-nav');
    
    // Se for dashboard, login ou registro, ajustamos a visualização
    if (tabId === 'dashboard') {
        navbar.style.display = 'none'; // Dashboard imersiva
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tabId === 'login' || tabId === 'register') {
        navbar.style.display = 'flex'; // Mantém navbar
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        if (navbar) navbar.style.display = 'flex';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Interatividade Sidebar da Dashboard mantida
document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            // Se o li contiver um onclick inline (como Sair ou Modal), não removemos o active dos outros automaticamente, ou tratamos via lógica específica.
            if(!this.getAttribute('onclick')) {
                sidebarItems.forEach(li => li.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});

/**
 * NOVAS FUNÇÕES: Controle de Modais (Deposit/PIX)
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.add('show');
        // Previne scroll do body
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.classList.remove('show');
        // Restaura scroll
        document.body.style.overflow = 'auto';
    }
}

// Fechar modal clicando fora do conteúdo
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }
}

/**
 * NOVAS FUNÇÕES: Sistema de Toast (Notificações Premium)
 */
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return; // Proteção caso a tela não possua o container
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Ícone dinâmico baseado no tipo
    let icon = 'fa-check-circle';
    if(type === 'error' || type === 'danger') icon = 'fa-circle-xmark';
    if(type === 'info') icon = 'fa-circle-info';
    
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    
    // Pequeno delay para a animação CSS acontecer
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove o toast após 3.5 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        // Espera a animação de saída antes de remover do DOM
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3500);
}
