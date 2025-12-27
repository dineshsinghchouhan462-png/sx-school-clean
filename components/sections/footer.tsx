export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2 tracking-tight">
              Saint Xavier's Senior Secondary School
            </h3>
            <p className="text-sm text-muted-foreground">Manasar, Nagaur District, Rajasthan</p>
            <p className="text-sm text-muted-foreground mt-2">Monday – Saturday</p>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Saint Xavier's Senior Secondary School</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
