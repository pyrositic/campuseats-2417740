# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).
**_My AI usage log is made by the same AI model to summarize the whole chat since it is long for the week_**

## Week 1

- Tool(s): Claude Sonnet 5.5 Medium; react.dev/learn (official React docs)
- What I asked for:
  - Whether git remote add origin still works if I forget .git at the end
    of the GitHub URL (A6), and how to check the remote with git remote -v.
  - What the "U" letter next to a file in VS Code means (untracked), and
    how to cancel a git add . without losing my work (git restore --staged .).
  - Explanations for the REFLECTION.md questions (B4): imperative vs
    declarative, why component names are capitalised, what a fragment <>...</>
    does compared to a <div>, and a benefit of small components.
  - Help understanding passages I was reading on react.dev/learn: what
    export default does vs named exports, what JSX and "markup" mean, why a
    component must return one parent element, why className is used instead
    of class, how CSS is added with a <link> tag, and how curly braces {}
    "escape back" into JavaScript.
  - How JSX relates to plain HTML and <script>, and that Java and JavaScript
    are different languages.
- What I kept, changed or rejected, and why:
  - Studied: the react.dev/learn pages on components, JSX and curly braces
    first, then asked the AI only when a sentence in the docs was unclear.
  - Kept: the ideas behind each answer. I rewrote the REFLECTION.md answers
    in my own words (1-3 sentences each) instead of pasting the AI's model
    answers, because the lab says to write them myself.
  - Kept: git restore --staged . to unstage. I did not run git rm --cached,
    which was only needed for a repo with no commits.
- One thing the AI got wrong and how I fixed it: When I pasted my
  REFLECTION questions with no answers, the AI replied with full model
  answers instead of only hints. I did not submit those; I used them to
  understand each concept, then wrote my own answers and checked them back
  with the AI.

## Week 2

- Tool(s): Claude Sonnet 5.5 (Medium); react.dev/learn (official React docs)
- What I asked for:
  - Help understanding the react.dev/learn section on rendering lists:
    how .map() and arrow functions (=>) work, why each item needs a key,
    and why an array can be declared with const (C1).
  - Help finishing my vendor data in src/data/vendors.js: suggestions for
    five more menu items (prices, descriptions, categories) to reach 15
    items for Mamak Mia, then replacing one dessert with Telur Mata (RM1).
  - A review of my App.jsx: state for the selected vendor and cart, and
    passing onAdd and cartCount down as props (C2 and C3).
  - How to format my code (Prettier, indentation, .prettierrc).
- What I kept, changed or rejected, and why:
  - Studied: the react.dev/learn pages on rendering lists and on state, so
    I could explain the .map() and useState code instead of only copying it.
  - Kept: the 15 menu items and prices, after checking them against my
    stall's style. I fixed the Nasi Goreng Kampung description myself
    (it said "rice noodles" but nasi goreng is rice).
  - Changed: I swapped the AI's suggested Pisang Goreng, then Kuih Lapis,
    for Telur Mata as a side dish for RM1.
  - Changed: I added "available" to every menu item and set a few to
    false, so Mamak Mia also shows Sold out items like Ruang Café.
  - Kept: the onAdd / cartCount props pattern from the lab sheet, with
    setCart((prev) => [...prev, item]) and no cart.push.
- One thing the AI got wrong and how I fixed it: The AI's extra menu items
  copied my "popular" field, but the lab's MenuItemCard reads
  item.available. Without that field every item showed Sold out
  with a disabled button. I found it by reading MenuItemCard and the
  lab sheet, then added "available": true/false to every item.

## Week 3

- Tool(s): Claude Sonnet 5.5 (Medium); react.dev/learn (official React docs)
- What I asked for:
  - How to do B2: fetching vendors in useEffect with loading, error and
    vendors state, a res.ok check, an AbortController cleanup, a reloadKey
    for the Try again button, and selecting the first vendor.
  - Help moving my vendors into public/api/vendors.json (my shop plus a
    classmate's shop, Ruang Café from 2414362) and fixing the JSON syntax.
  - How to do B3: cart lines of { item, qty }, merging quantities when the
    same item is added, handleChangeQty, handleRemove, the header badge with
    reduce, the view state, and which file each piece goes in.
  - A review of CheckoutForm.jsx (B5) and help completing its TODOs
    (mahallah rule, pickup time rule, calling onPlaceOrder).
  - Debugging a blank screen by having my App.jsx and index.css reviewed.
  - Making some Mamak Mia items sold out by adding an "available" field.
  - B6 (matric digit 0): how to build the "Search menu by name" feature
    with a controlled input and a derived, case-insensitive filtered list.
- What I kept, changed or rejected, and why:
  - Studied: the react.dev/learn pages on state, responding to events and
    effects, and I used the code-along SearchList (A2) as the model for my
    search box.
  - Kept: the useEffect fetch pattern, the cart functions, the reduce for
    cartCount and the total, the finished validate() function.
  - Kept: the search feature design. The query is state in App and the
    visible items are derived with filter + toLowerCase + includes, not
    stored in state. I added .trim() and a "No items match" message
    because MenuList's own empty message did not fit a search.
  - Changed: I added "available" to every Mamak Mia item in vendors.json
    and set three to false, so both vendors use the same fields. I chose
    this over the shortcut of changing MenuItemCard to treat a missing
    "available" as true.
  - Changed: I removed a broken duplicate block at the bottom of index.css
    (it contained "borderradius").
  - Changed: I moved useState and handlePlaceOrder inside App, because the
    first version I pasted had them outside the component and crashed.
- One thing the AI got wrong and how I fixed it: When I asked how to push
  as a backup, the AI told me to leave out git tag week-3. The lab sheet
  (B7 and the checkpoint rubric) requires the week-3 tag, so I compared
  its advice with the sheet, ran git tag week-3 and git push origin week-3,
  and will keep the tag.

## Week 4

- Tool(s): Claude Sonnet 5.5 (Medium); react.dev/learn and the React Router docs
- What I asked for:
  - How to write the useLocalStorage custom hook (with try/catch around
    JSON.parse and setItem) and understanding the code-along version.
  - How to move my fetch, loading, error and reload logic out of App into
    a useVendors hook that returns { vendors, loading, error, reload }.
  - How to build the cart context (cart-context.js, CartProvider.jsx,
    useCart.js) and remove the cart props from Header, MenuList and the
    cart page.
  - How to build the pages and routes (HomePage, VendorPage with
    useParams, CartPage with useNavigate, OrdersPage, NotFoundPage),
    a Layout with Outlet, NavLink in the header and Link in VendorCard.
  - Fixing a Vite "Failed to resolve import" error for OrdersPage.jsx and
    a white page after adding the router.
  - B6 (matric digit 0): keeping the menu search text in the URL (?q=)
    with useSearchParams.
  - CSS styling (optional, not part of the lab):
    - A colourful pastel "kidscore" theme: a warm cream background, a
      coral-to-purple gradient header, rounded Baloo 2 and Nunito fonts
      (linked in index.html), and a different colour on each card.
    - Hover effects: cards lift and scale up on hover, buttons press down
      when clicked, and the nav links and quantity buttons grow slightly.
    - A merged version of index.css, so I could replace the whole file
      instead of pasting a block on the end.
    - A styled "All vendors" back link (a pill-shaped button that slides
      left on hover), using a new back-link class.
- What I kept, changed or rejected, and why:
  - Studied: the custom hooks, context and React Router pages, then read
    each hook and page line by line so I could explain it.
  - Kept: the cart logic from Week 3. It only moved into CartProvider, and
    count and total are still derived with reduce, not stored.
  - Kept: the search filter from Week 3 (derived, case-insensitive). Only
    the source of the text changed, from useState to useSearchParams.
  - Changed: I used { replace: true } in setSearchParams so each keystroke
    does not add a browser history entry, and Back leaves the page instead.
  - Changed: I put BrowserRouter and CartProvider inside App.jsx, to match
    the lab's route table, instead of in main.jsx.
  - Changed: I deleted the old Cart.jsx and the view/lastOrder state in
    App, because the URL and the orders list replaced them.
  - Changed: I replaced the starter index.css with the merged themed
    version. The starter says I do not need to write CSS, but it does not
    forbid changing it, and styling is not assessed.
  - Kept: every class name from the starter CSS (card, btn, cart-line,
    vendor-grid and so on), so the components still work without edits.
  - Changed: I added className="back-link" to the "All vendors" link in
    VendorPage and wrote the .back-link rules at the end of index.css.
    No component logic changed.
  - Checked: the new CSS keeps a prefers-reduced-motion rule, so the hover
    animations turn off for people who disable animations.
- One thing the AI got wrong and how I fixed it: The AI told me to wrap
  the app in BrowserRouter inside main.jsx, but the lab's route table
  has BrowserRouter and CartProvider inside App.jsx. Having both gave a
  white page. I compared the AI's code with the lab sheet's route table,
  moved the providers into App.jsx, and left main.jsx with only <App />.

  ## Week 5 & Milestone 1 Report

- Tool(s): Gemini
- What I asked for:
  - Conceptual guidance and revision for the 60-minute practical exam, in depth study of the campuseat code, breaking down standard parent-child data flow, controlled form inputs, and Context/routing blueprints.
  - Checking and verifying my component tree hierarchy (Section 2.1) to confirm the Layout renders.
  - Verifying and clarifying the state audit table (Section 2.2) to determine exact state ownership, distinguishing between actual React state (cart, orders, values) versus URL parameters and derived values.
  - Step-by-step tracing and verification of the "Place Order" workflow (Section 2.3) from form submit in CheckoutForm, lifting state to CartPage, through useCart and CartProvider, to localStorage and UI updates.
  - Defining clear, realistic test cases for Section 4.1 ("What I checked"), including deep-linking, refresh persistence, checkout form validation, and 404 routing.
- What I kept, changed or rejected, and why:
  - Kept: the verified component tree structure showing Layout hosting Header, Footer, and Outlet, with reused components properly noted.
  - Kept: the 6-step traced action for placing an order because it correctly represents my actual implementation without missing intermediate hooks.
  - Kept: the testing table scenarios for Section 4.1, confirming that each check corresponds directly to expected behavior.
  - Changed: rejected the AI's overly long state audit table that listed derived values and internal hook triggers as separate state rows; simplified Table 2.2 to focus strictly on real state variables matching the report prompt.
  - Changed: fixed the broken code excerpt formatting in Section 3 and added missing state values that were flagged during the report review.
- One thing the AI got wrong and how I fixed it:
  - The AI initially suggested an over-complicated state table that treated derived calculations (count, total) and URL parameters (id, q) as standard state rows. I corrected this by keeping only genuine state variables in the main table and documenting URL route parameters and derived calculations separately as notes.

## Week 5

- Tool(s): Claude Sonnet 5.5 (Medium); Firebase Authentication docs
- What I asked for:
  - Converting the Firebase config object into .env.local variables with
    the VITE\_ prefix, so the names match import.meta.env in firebase.js.
  - Finishing the TODOs in AuthProvider.jsx (login with
    signInWithEmailAndPassword, logout with signOut).
  - Whether anything should be added to authErrors.js, and what "type it
    in full" means for firebase.js, auth-context.js and useAuth.js.
  - Where to find the Firebase appId, and how to set up .env.local for
    CampusEats, which is a different folder from the code-along.
  - Finishing LoginPage.jsx (TODO 3 and 4: await login or
    loginWithGoogle, then navigate to goTo with replace).
  - Building RegisterPage.jsx from LoginPage, and checking ProtectedRoute,
    the new route tree in App.jsx and the Header changes (user name and
    Log out button).
  - B6 (matric digit 0): keeping the last 5 searches per user as quick
    buttons under the search box (newest first, no duplicates, max 5,
    stored under ce-searches-<uid>).
  - Debugging a blank screen after adding Firebase and the new routes.
- What I kept, changed or rejected, and why:
  - Kept: the VITE*FIREBASE*\* names, because Vite only exposes variables
    that start with VITE\_. I added VITE_FIREBASE_STORAGE_BUCKET and
    VITE_FIREBASE_MESSAGING_SENDER_ID because the lab's firebase.js reads
    them, and created a new .env.local inside the campuseats folder.
  - Kept: login and logout as one-line returns, with no setUser call,
    because onAuthStateChanged already updates the user (listen, don't ask).
  - Kept: most of the extra error codes in authErrors.js, and I use
    optional chaining (error?.code) so a non-Firebase error cannot crash it.
  - Changed: ProtectedRoute imports my default-export Loading.jsx instead
    of { Loading } from Status.jsx, because my project has no Status.jsx
    export. It also passes state={{ from: location.pathname }} so the
    login page can send me back to the page I wanted.
  - Changed: Header got NavLink, user name and Log out button added to my
    Week 4 header.
  - Kept: the search feature design. A search is saved when I press Enter,
    not on every keystroke, so the list does not fill with "n", "na", "nas".
  - Changed: the recent searches live in a new SearchBox component, and
    VendorPage gives it key={user?.uid ?? "guest"}. useLocalStorage reads
    its key only once, so without the key a guest's list could overwrite
    the real user's list while Firebase is still loading.
  - Checked: for the blank screen, I first ruled out .env.local by
    printing import.meta.env.VITE_FIREBASE_PROJECT_ID in firebase.js (it
    printed my project id), then removed the log. The console error
    "App is not defined" at App.jsx line 35 showed that the function App
    wrapper was missing when I pasted the new route tree, so
    export default App had nothing to export. I restored function App()
    around the BrowserRouter block and the page loaded.
  - Checked: that .env.local is not pushed to GitHub (git status), that I
    restarted npm run dev after editing it, and that Email/Password and
    Google sign-in are enabled in the Firebase console.
- One thing the AI got wrong and how I fixed it: My pasted lab code lost
  its JSX tags and the <uid> part of the storage key, so the AI rebuilt
  them by guessing. I compared its version with the lab sheet and fixed
  the differences, such as the key name and the Loading import. The AI
  also first gave me an .env.local without the storage bucket and
  messaging sender id, which the lab's firebase.js needs, and I added them.
  For the blank screen, the AI's first guess was .env.local problems, but
  the real cause was the missing function App wrapper. I found it by
  reading the console error instead of trusting the guess.
