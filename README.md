# DJ + Bartender Events Website (Draft)

A one-page website with a booking form. It's plain HTML, CSS and JS, so there's no build step.

## Files
- `index.html`: the main page (all content lives here)
- `styles.css`: colors, fonts, layout
- `script.js`: mobile menu, date picker limit, footer year
- `thank-you.html`: where people land after submitting the form
- `netlify.toml`: tells Netlify to serve this folder

## Before going public
Search `index.html` for `TODO` and replace:
1. **Business name**: "Loud Mob" is the working name (also in `thank-you.html`)
2. **Package prices**: the `$XXX` values
3. **Reviews**: placeholder text, so swap in real client quotes
4. **Contact info**: phone, email, Instagram, city
5. **FAQ answers**: match them to your real policies

To change colors, edit the `--gold` and `--violet` values at the top of `styles.css`.

## Deploying (GitHub → Netlify)
1. Open this folder in VS Code.
2. Source Control panel → **Publish to GitHub** (or commit and push to an existing repo).
3. In Netlify: **Add new site → Import from Git**, then pick the repo. Leave the build command blank and set the publish directory to `.`
4. After the first deploy, open **Site configuration → Forms** in Netlify and enable form detection if it's off. Then redeploy.
   Booking requests will appear under **Forms**. You can set up email notifications there too.

After that, every push to GitHub redeploys the site automatically.
