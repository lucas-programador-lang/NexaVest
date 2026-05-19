/**
 * Lógica de roteamento SPA mantida e aprimorada
 */
function switchTab(tabId) {
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
    
    if (tabId === 'dashboard') {
        if(navbar) navbar.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tabId === 'login' || tabId === 'register') {
        if(navbar) navbar.style.display = 'flex';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        if (navbar) navbar.style.display = 'flex';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            if(!this.getAttribute('onclick')) {
                sidebarItems.forEach(li => li.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});


/**
 * NOVAS FUNÇÕES: Sistema de Toast (Notificações Premium)
 */
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return; 
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-check-circle';
    if(type === 'error' || type === 'danger') icon = 'fa-circle-xmark';
    if(type === 'info') icon = 'fa-circle-info';
    
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3500);
}
