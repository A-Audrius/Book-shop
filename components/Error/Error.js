class Error {
    render() {
        const html = `
        	<div class="error-container">
                <div class="error-message">
                    <h3>Neįmanoma prisijungti</h3>
                    <p>Pabandykite vėliau</p>
                </div>
        	</div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
