import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)'
])

export default clerkMiddleware(async (auth, req) => {
  console.log("-------------------------------------------------------")
  console.log("-------------------------------------------------------")
  console.log("-------------------------------------------------------")
  console.log("Current URL: ", req.nextUrl.pathname)
  const AuthObj = await auth();
  console.log("The Auth Object is: ", AuthObj);
  const { userId, sessionId } = AuthObj;
  console.log("User Id from Clerk: ", userId);
  console.log("Session Id from Clerk: ", sessionId);

  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}