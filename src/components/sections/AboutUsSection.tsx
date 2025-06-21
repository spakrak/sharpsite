// src/components/sections/AboutUsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, MessageSquare, Users, Zap, Smartphone } from "lucide-react";

export function AboutUsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Websites That Win You More Jobs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We build fast, reliable sites that earn trust and drive new
              customer inquiries — without the hassle.
            </p>
          </div>

          {/* Meet the Team */}
          <Card className="mb-12 rounded-lg overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg">
            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Meet Your Team
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Ty is your point of contact from start to finish — handling
                    content, feedback, and launch so you don't have to think
                    about tech.
                  </p>
                  <p className="text-gray-700 mb-4">
                    David handles the backend, making sure your site loads fast,
                    never breaks, and shows up in Google.
                  </p>
                  <p className="text-gray-700">
                    After one of our sites helped a contractor land two
                    six-figure deals in a month, we knew this model worked. Now
                    we do it for small businesses across the country.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    {/* Enhanced photo container with more emphasis */}
                    <div className="bg-white p-8 rounded-xl shadow-2xl border border-blue-100 transform hover:scale-105 transition-all duration-300">
                      <div className="flex gap-6 items-center">
                        <div className="text-center">
                          <Avatar className="h-20 w-20 mx-auto mb-3 ring-4 ring-blue-200 shadow-lg">
                            <AvatarImage src="/david.jpg" />
                            <AvatarFallback className="bg-blue-100 text-blue-600 font-bold text-xl">
                              D
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-sm">
                            <div className="font-semibold text-gray-900">
                              David
                            </div>
                            <div className="text-gray-600">Developer</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <Avatar className="h-20 w-20 mx-auto mb-3 ring-4 ring-indigo-200 shadow-lg">
                            <AvatarImage src="/ty.jpg" />
                            <AvatarFallback className="bg-indigo-100 text-indigo-600 font-bold text-xl">
                              T
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-sm">
                            <div className="font-semibold text-gray-900">
                              Ty
                            </div>
                            <div className="text-gray-600">Project Lead</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* How We Work */}
          <Card className="mb-12 hover:shadow-md transition-shadow">
            <CardContent className="p-8 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  We Keep It Simple
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  One person to talk to. No hidden fees. No tech headaches. Ty
                  handles everything, and David makes sure your site works and
                  brings you business.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Why SharpSite Works */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why SharpSite Works for Small Businesses
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Talk to a Human
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Ty handles everything personally — no sales reps, no
                      support tickets, no BS.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Plain English
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We explain what matters, skip what doesn't, and never bury
                      you in tech speak.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Built to Convert
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Our designs turn visits into calls, not just clicks.
                      That's the only metric we care about.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Works on Every Device
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Your site will load fast and look great on phones,
                      tablets, and desktops.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
