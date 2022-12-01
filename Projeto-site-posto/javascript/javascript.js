<script type="text/javascript">
initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function(accessToken) {
                if (document.getElementById('sign-in-status')) {
                    document.getElementById('sign-in-status').textContent = 'Signed in';
                }
                if (document.getElementById('sign-in')) {
                    document.getElementById('sign-in').textContent = 'Sign out';
                }
                if (document.getElementById('account-details')) {
                    document.getElementById('account-details').textContent = JSON.stringify({
                        displayName: displayName,
                        email: emailauth
                    }, null, '  ');
                }
            });
        } else {
            // User is signed out.
            /*document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';*/
        }
    }, function(error) {
        console.log(error);
    });
};

window.addEventListener('load', function() {
    initApp()
});
</script>


<script type="text/javascript" src="//platform-api.sharethis.com/js/sharethis.js#property=5c4219a180b4ba001b1ee240&product=inline-share-buttons"></script>