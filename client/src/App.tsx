import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/utils/ScrollToTop";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Events from "@/pages/Events";
import Resources from "@/pages/Resources";
import Join from "@/pages/Join";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/events" component={Events} />
      <Route path="/resources" component={Resources} />
      <Route path="/join" component={Join} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="mrisa-theme">
          <ScrollToTop />
          <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
