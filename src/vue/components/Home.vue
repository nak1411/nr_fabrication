<template>
    <div id="home">
    <header class="site__header">
        <div class="site__intro">
            <h1 class="site__motto">Insert headline here.</h1>
            <p class="site__introdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum obcaecati
                eligendi aperiam sed, est excepturi fugiat, laboriosam odio corrupti iusto explicabo vero facere saepe
                fuga hic ullam dignissimos rem?</p>
        </div>
        <div class="site__hero--para"></div>
    </header>

    <main class="site__content">
        <section class="site__whatwedo site__grid--single">
            <h2 class="site__title">What We Do</h2>
            <p class="site__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas veniam unde a
                ut eum voluptatibus alias voluptatum non rerum quasi excepturi vero, perspiciatis sit, quis quia
                autem labore optio maiores!</p>
        </section>
        <div class="site__break"></div>

        <section class="site__services site__grid--multi">
            <div class="site_cell">
                <h2 class="site__title--small">Thing One</h2>
                <p class="site__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
            </div>

            <div class="site_cell">
                <h2 class="site__title--small">Thing Two</h2>
                <p class="site__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
            </div>

            <div class="site_cell">
                <h2 class="site__title--small">Thing Three</h2>
                <p class="site__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit!</p>
            </div>
        </section>
        <div class="site__break"></div>

        <section class="site__reviews site__grid--double">
            <div class="site_cell">
                <p class="site__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta doloremque
                    excepturi voluptatem, impedit iusto molestias distinctio corporis nulla esse voluptatibus explicabo
                    expedita laborum animi minus quaerat neque harum! Quibusdam!</p>
            </div>

            <div class="site_cell">
                <p class="site__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nihil
                    consequatur, explicabo velit iure culpa accusamus autem distinctio quaerat aspernatur rem alias hic
                    praesentium, aperiam atque ipsa ratione. Labore, sit.</p>
            </div>
            <div class="site_cell">
                <p class="site__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nihil
                    consequatur, explicabo velit iure culpa accusamus autem distinctio quaerat aspernatur rem alias hic
                    praesentium, aperiam atque ipsa ratione. Labore, sit.</p>
            </div>
            <div class="site_cell">
                <p class="site__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nihil
                    consequatur, explicabo velit iure culpa accusamus autem distinctio quaerat aspernatur rem alias hic
                    praesentium, aperiam atque ipsa ratione. Labore, sit.</p>
            </div>
        </section>
    </main>

    <footer class="site__footer">
        <div class="site__footersections">
            <a class="site__footerspan" href="#">About Us</a>
            <a class="site__footerspan" href="#">Contact Us</a>
        </div>
        <div class="site__trade">
            <h3 class="site__trade">© 2018 NR Fabrication</h3>
        </div>
    </footer>
    </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>