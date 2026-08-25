#!/usr/bin/env python3
import os
BASE=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
header=open(os.path.join(BASE,'_build','header.html')).read()
footer=open(os.path.join(BASE,'_build','footer.html')).read()

PAGES={
 'mini-splits.html':('Ductless Mini Splits &amp; Rebates — Stable Air Heating &amp; Cooling',
   'Ductless mini-split installation, repair & service in Round Lake and the Capital Region. Energy-efficient zoned comfort with rebates available. Call Stable Air at (518) 645-8011.','mini-splits.html'),
 'air-conditioning.html':('Air Conditioning — Install, Repair &amp; Maintenance | Stable Air',
   'AC installation, repair, replacement and maintenance in Round Lake, Clifton Park & Saratoga Springs. Upfront pricing, 24/7 service. Call Stable Air at (518) 645-8011.','air-conditioning.html'),
 'heating.html':('Heating Services — Furnaces, Boilers &amp; Water Heaters | Stable Air',
   'Gas furnace, boiler, tankless and water heater install & repair in the Capital Region. Fast, honest heating service from Stable Air. Call (518) 645-8011.','heating.html'),
 'home-improvements.html':('Home Improvements — Insulation, Electrical &amp; Remodels | Stable Air',
   'Electric panel upgrades, insulation, water filtration, kitchen & bath remodels, siding and roofing from Stable Air. Complete home comfort in the Capital Region.','home-improvements.html'),
 'membership.html':('Comfort Membership &amp; Member Login — Stable Air Heating &amp; Cooling',
   'Join the Stable Air Comfort Club for priority service, exclusive coupons, filters at cost and free tune-ups. Member login for exclusive offers.','membership.html'),
 'resources.html':('Resources — FAQs, SEER Savings &amp; Service Areas | Stable Air',
   'HVAC resources from Stable Air: frequently asked questions, SEER efficiency savings, current offers and the Capital Region service areas we cover.','resources.html'),
 'contact.html':('Contact &amp; Fast Track Booking — Stable Air Heating &amp; Cooling',
   'Book HVAC service fast. Tell us your unit type, service needed and priority level and Stable Air will route your request. Round Lake, NY. Call (518) 645-8011.','contact.html'),
}

for slug,(title,desc,active) in PAGES.items():
    part=os.path.join(BASE,'_build','parts',slug)
    if not os.path.exists(part):
        print('SKIP (no part):',slug); continue
    content=open(part).read()
    h=header.replace(' class="active"','')
    h=h.replace(f'<a href="{active}"', f'<a href="{active}" class="active"',2)
    html=(f'<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n'
          f'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
          f'<title>{title}</title>\n<meta name="description" content="{desc}">\n'
          f'<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n\n'
          f'{h}\n{content}\n{footer}\n<script src="app.js" defer></script>\n</body>\n</html>\n')
    open(os.path.join(BASE,slug),'w').write(html)
    print('BUILT',slug,len(html))
