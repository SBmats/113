(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    AAub: function (e, t, n) {
      "use strict";
      n.r(t);
      var r,
        i = n("mrSG"),
        a = n("wj3C"),
        o = n.n(a),
        s = n("S+S0"),
        c = n("zVF4"),
        u = n("nbvr"),
        l = 1e4,
        f = "w:0.4.17",
        d = "FIS_v2",
        p = "https://firebaseinstallations.googleapis.com/v1",
        h = 36e5,
        _ =
          (((r = {})["missing-app-config-values"] =
            'Missing App configuration value: "{$valueName}"'),
          (r["not-registered"] = "Firebase Installation is not registered."),
          (r["installation-not-found"] = "Firebase Installation not found."),
          (r["request-failed"] =
            '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),
          (r["app-offline"] =
            "Could not process request. Application offline."),
          (r["delete-pending-registration"] =
            "Can't delete installation while there is a pending registration request."),
          r),
        b = new c.ErrorFactory("installations", "Installations", _);
      function v(e) {
        return (
          e instanceof c.FirebaseError && e.code.includes("request-failed")
        );
      }
      function g(e) {
        return p + "/projects/" + e.projectId + "/installations";
      }
      function m(e) {
        return {
          token: e.token,
          requestStatus: 2,
          expiresIn: ((t = e.expiresIn), Number(t.replace("s", "000"))),
          creationTime: Date.now(),
        };
        var t;
      }
      function w(e, t) {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var n, r;
          return Object(i.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, t.json()];
              case 1:
                return (
                  (n = i.sent()),
                  [
                    2,
                    b.create("request-failed", {
                      requestName: e,
                      serverCode: (r = n.error).code,
                      serverMessage: r.message,
                      serverStatus: r.status,
                    }),
                  ]
                );
            }
          });
        });
      }
      function y(e) {
        return new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-goog-api-key": e.apiKey,
        });
      }
      function I(e, t) {
        var n = t.refreshToken,
          r = y(e);
        return (
          r.append(
            "Authorization",
            (function (e) {
              return d + " " + e;
            })(n)
          ),
          r
        );
      }
      function O(e) {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var t;
          return Object(i.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, e()];
              case 1:
                return (t = n.sent()).status >= 500 && t.status < 600
                  ? [2, e()]
                  : [2, t];
            }
          });
        });
      }
      function j(e, t) {
        var n = t.fid;
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var t, r, a, o, s;
          return Object(i.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (t = g(e)),
                  (r = y(e)),
                  (a = {
                    method: "POST",
                    headers: r,
                    body: JSON.stringify({
                      fid: n,
                      authVersion: d,
                      appId: e.appId,
                      sdkVersion: f,
                    }),
                  }),
                  [
                    4,
                    O(function () {
                      return fetch(t, a);
                    }),
                  ]
                );
              case 1:
                return (o = i.sent()).ok ? [4, o.json()] : [3, 3];
              case 2:
                return [
                  2,
                  {
                    fid: (s = i.sent()).fid || n,
                    registrationStatus: 2,
                    refreshToken: s.refreshToken,
                    authToken: m(s.authToken),
                  },
                ];
              case 3:
                return [4, w("Create Installation", o)];
              case 4:
                throw i.sent();
            }
          });
        });
      }
      function E(e) {
        return new Promise(function (t) {
          setTimeout(t, e);
        });
      }
      var T = /^[cdef][\w-]{21}$/,
        C = "";
      function S() {
        try {
          var e = new Uint8Array(17);
          (self.crypto || self.msCrypto).getRandomValues(e),
            (e[0] = 112 + (e[0] % 16));
          var t = (function (e) {
            return ((t = e),
            btoa(String.fromCharCode.apply(String, Object(i.__spread)(t)))
              .replace(/\+/g, "-")
              .replace(/\//g, "_")).substr(0, 22);
            var t;
          })(e);
          return T.test(t) ? t : C;
        } catch (n) {
          return C;
        }
      }
      function D(e) {
        return e.appName + "!" + e.appId;
      }
      var N = new Map();
      function A(e, t) {
        var n = D(e);
        P(n, t),
          (function (e, t) {
            var n = x();
            n &&
              n.postMessage({
                key: e,
                fid: t,
              }),
              F();
          })(n, t);
      }
      function P(e, t) {
        var n,
          r,
          a = N.get(e);
        if (a)
          try {
            for (
              var o = Object(i.__values)(a), s = o.next();
              !s.done;
              s = o.next()
            )
              (0, s.value)(t);
          } catch (c) {
            n = {
              error: c,
            };
          } finally {
            try {
              s && !s.done && (r = o.return) && r.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
      }
      var k = null;
      function x() {
        return (
          !k &&
            "BroadcastChannel" in self &&
            ((k = new BroadcastChannel("[Firebase] FID Change")).onmessage =
              function (e) {
                P(e.data.key, e.data.fid);
              }),
          k
        );
      }
      function F() {
        0 === N.size && k && (k.close(), (k = null));
      }
      var M,
        q = "firebase-installations-database",
        B = 1,
        L = "firebase-installations-store",
        V = null;
      function R() {
        return (
          V ||
            (V = Object(u.openDb)(q, B, function (e) {
              switch (e.oldVersion) {
                case 0:
                  e.createObjectStore(L);
              }
            })),
          V
        );
      }
      function K(e, t) {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var n, r, a, o, s;
          return Object(i.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return (n = D(e)), [4, R()];
              case 1:
                return (
                  (r = i.sent()),
                  (a = r.transaction(L, "readwrite")),
                  [4, (o = a.objectStore(L)).get(n)]
                );
              case 2:
                return (s = i.sent()), [4, o.put(t, n)];
              case 3:
                return i.sent(), [4, a.complete];
              case 4:
                return i.sent(), (s && s.fid === t.fid) || A(e, t.fid), [2, t];
            }
          });
        });
      }
      function G(e) {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var t, n, r;
          return Object(i.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return (t = D(e)), [4, R()];
              case 1:
                return (
                  (n = i.sent()),
                  [
                    4,
                    (r = n.transaction(L, "readwrite"))
                      .objectStore(L)
                      .delete(t),
                  ]
                );
              case 2:
                return i.sent(), [4, r.complete];
              case 3:
                return i.sent(), [2];
            }
          });
        });
      }
      function U(e, t) {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var n, r, a, o, s, c;
          return Object(i.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return (n = D(e)), [4, R()];
              case 1:
                return (
                  (r = i.sent()),
                  (a = r.transaction(L, "readwrite")),
                  [4, (o = a.objectStore(L)).get(n)]
                );
              case 2:
                return (
                  (s = i.sent()),
                  void 0 !== (c = t(s)) ? [3, 4] : [4, o.delete(n)]
                );
              case 3:
                return i.sent(), [3, 6];
              case 4:
                return [4, o.put(c, n)];
              case 5:
                i.sent(), (i.label = 6);
              case 6:
                return [4, a.complete];
              case 7:
                return (
                  i.sent(), !c || (s && s.fid === c.fid) || A(e, c.fid), [2, c]
                );
            }
          });
        });
      }
      function $(e) {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var t, n, r;
          return Object(i.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                return [
                  4,
                  U(e, function (n) {
                    var r = (function (e) {
                        return W(
                          e || {
                            fid: S(),
                            registrationStatus: 0,
                          }
                        );
                      })(n),
                      a = (function (e, t) {
                        if (0 === t.registrationStatus) {
                          if (!navigator.onLine)
                            return {
                              installationEntry: t,
                              registrationPromise: Promise.reject(
                                b.create("app-offline")
                              ),
                            };
                          var n = {
                            fid: t.fid,
                            registrationStatus: 1,
                            registrationTime: Date.now(),
                          };
                          return {
                            installationEntry: n,
                            registrationPromise: (function (e, t) {
                              return Object(i.__awaiter)(
                                this,
                                void 0,
                                void 0,
                                function () {
                                  var n, r;
                                  return Object(i.__generator)(
                                    this,
                                    function (i) {
                                      switch (i.label) {
                                        case 0:
                                          return (
                                            i.trys.push([0, 2, , 7]),
                                            [4, j(e, t)]
                                          );
                                        case 1:
                                          return (n = i.sent()), [2, K(e, n)];
                                        case 2:
                                          return v((r = i.sent())) &&
                                            409 === r.serverCode
                                            ? [4, G(e)]
                                            : [3, 4];
                                        case 3:
                                          return i.sent(), [3, 6];
                                        case 4:
                                          return [
                                            4,
                                            K(e, {
                                              fid: t.fid,
                                              registrationStatus: 0,
                                            }),
                                          ];
                                        case 5:
                                          i.sent(), (i.label = 6);
                                        case 6:
                                          throw r;
                                        case 7:
                                          return [2];
                                      }
                                    }
                                  );
                                }
                              );
                            })(e, n),
                          };
                        }
                        return 1 === t.registrationStatus
                          ? {
                              installationEntry: t,
                              registrationPromise: z(e),
                            }
                          : {
                              installationEntry: t,
                            };
                      })(e, r);
                    return (t = a.registrationPromise), a.installationEntry;
                  }),
                ];
              case 1:
                return (n = a.sent()).fid !== C ? [3, 3] : ((r = {}), [4, t]);
              case 2:
                return [2, ((r.installationEntry = a.sent()), r)];
              case 3:
                return [
                  2,
                  {
                    installationEntry: n,
                    registrationPromise: t,
                  },
                ];
            }
          });
        });
      }
      function z(e) {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var t, n, r, a;
          return Object(i.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, H(e)];
              case 1:
                (t = i.sent()), (i.label = 2);
              case 2:
                return 1 !== t.registrationStatus ? [3, 5] : [4, E(100)];
              case 3:
                return i.sent(), [4, H(e)];
              case 4:
                return (t = i.sent()), [3, 2];
              case 5:
                return 0 !== t.registrationStatus ? [3, 7] : [4, $(e)];
              case 6:
                return (
                  (n = i.sent()),
                  (r = n.installationEntry),
                  (a = n.registrationPromise) ? [2, a] : [2, r]
                );
              case 7:
                return [2, t];
            }
          });
        });
      }
      function H(e) {
        return U(e, function (e) {
          if (!e) throw b.create("installation-not-found");
          return W(e);
        });
      }
      function W(e) {
        return 1 === (t = e).registrationStatus &&
          t.registrationTime + l < Date.now()
          ? {
              fid: e.fid,
              registrationStatus: 0,
            }
          : e;
        var t;
      }
      function J(e, t) {
        var n = e.appConfig,
          r = e.platformLoggerProvider;
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var e, a, o, s, c;
          return Object(i.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e = (function (e, n) {
                    var r = t.fid;
                    return g(e) + "/" + r + "/authTokens:generate";
                  })(n)),
                  (a = I(n, t)),
                  (o = r.getImmediate({
                    optional: !0,
                  })) &&
                    a.append("x-firebase-client", o.getPlatformInfoString()),
                  (s = {
                    method: "POST",
                    headers: a,
                    body: JSON.stringify({
                      installation: {
                        sdkVersion: f,
                      },
                    }),
                  }),
                  [
                    4,
                    O(function () {
                      return fetch(e, s);
                    }),
                  ]
                );
              case 1:
                return (c = i.sent()).ok ? [4, c.json()] : [3, 3];
              case 2:
                return [2, m(i.sent())];
              case 3:
                return [4, w("Generate Auth Token", c)];
              case 4:
                throw i.sent();
            }
          });
        });
      }
      function X(e, t) {
        return (
          void 0 === t && (t = !1),
          Object(i.__awaiter)(this, void 0, void 0, function () {
            var n, r, a;
            return Object(i.__generator)(this, function (o) {
              switch (o.label) {
                case 0:
                  return [
                    4,
                    U(e.appConfig, function (r) {
                      if (!Q(r)) throw b.create("not-registered");
                      var a = r.authToken;
                      if (
                        !t &&
                        2 === a.requestStatus &&
                        !(function (e) {
                          var t = Date.now();
                          return (
                            t < e.creationTime ||
                            e.creationTime + e.expiresIn < t + h
                          );
                        })(a)
                      )
                        return r;
                      if (1 === a.requestStatus)
                        return (
                          (n = (function (e, t) {
                            return Object(i.__awaiter)(
                              this,
                              void 0,
                              void 0,
                              function () {
                                var n, r;
                                return Object(i.__generator)(
                                  this,
                                  function (i) {
                                    switch (i.label) {
                                      case 0:
                                        return [4, Y(e.appConfig)];
                                      case 1:
                                        (n = i.sent()), (i.label = 2);
                                      case 2:
                                        return 1 !== n.authToken.requestStatus
                                          ? [3, 5]
                                          : [4, E(100)];
                                      case 3:
                                        return i.sent(), [4, Y(e.appConfig)];
                                      case 4:
                                        return (n = i.sent()), [3, 2];
                                      case 5:
                                        return 0 ===
                                          (r = n.authToken).requestStatus
                                          ? [2, X(e, t)]
                                          : [2, r];
                                    }
                                  }
                                );
                              }
                            );
                          })(e, t)),
                          r
                        );
                      if (!navigator.onLine) throw b.create("app-offline");
                      var o = (function (e) {
                        var t = {
                          requestStatus: 1,
                          requestTime: Date.now(),
                        };
                        return Object(i.__assign)(Object(i.__assign)({}, e), {
                          authToken: t,
                        });
                      })(r);
                      return (
                        (n = (function (e, t) {
                          return Object(i.__awaiter)(
                            this,
                            void 0,
                            void 0,
                            function () {
                              var n, r, a;
                              return Object(i.__generator)(this, function (o) {
                                switch (o.label) {
                                  case 0:
                                    return (
                                      o.trys.push([0, 3, , 8]), [4, J(e, t)]
                                    );
                                  case 1:
                                    return (
                                      (n = o.sent()),
                                      (a = Object(i.__assign)(
                                        Object(i.__assign)({}, t),
                                        {
                                          authToken: n,
                                        }
                                      )),
                                      [4, K(e.appConfig, a)]
                                    );
                                  case 2:
                                    return o.sent(), [2, n];
                                  case 3:
                                    return !v((r = o.sent())) ||
                                      (401 !== r.serverCode &&
                                        404 !== r.serverCode)
                                      ? [3, 5]
                                      : [4, G(e.appConfig)];
                                  case 4:
                                    return o.sent(), [3, 7];
                                  case 5:
                                    return (
                                      (a = Object(i.__assign)(
                                        Object(i.__assign)({}, t),
                                        {
                                          authToken: {
                                            requestStatus: 0,
                                          },
                                        }
                                      )),
                                      [4, K(e.appConfig, a)]
                                    );
                                  case 6:
                                    o.sent(), (o.label = 7);
                                  case 7:
                                    throw r;
                                  case 8:
                                    return [2];
                                }
                              });
                            }
                          );
                        })(e, o)),
                        o
                      );
                    }),
                  ];
                case 1:
                  return (r = o.sent()), n ? [4, n] : [3, 3];
                case 2:
                  return (a = o.sent()), [3, 4];
                case 3:
                  (a = r.authToken), (o.label = 4);
                case 4:
                  return [2, a];
              }
            });
          })
        );
      }
      function Y(e) {
        return U(e, function (e) {
          if (!Q(e)) throw b.create("not-registered");
          var t;
          return 1 === (t = e.authToken).requestStatus &&
            t.requestTime + l < Date.now()
            ? Object(i.__assign)(Object(i.__assign)({}, e), {
                authToken: {
                  requestStatus: 0,
                },
              })
            : e;
        });
      }
      function Q(e) {
        return void 0 !== e && 2 === e.registrationStatus;
      }
      function Z(e) {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var t;
          return Object(i.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, $(e)];
              case 1:
                return (t = n.sent().registrationPromise) ? [4, t] : [3, 3];
              case 2:
                n.sent(), (n.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }
      function ee(e, t) {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var n, r, a, o;
          return Object(i.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (n = (function (e, n) {
                    var r = t.fid;
                    return g(e) + "/" + r;
                  })(e)),
                  (r = I(e, t)),
                  (a = {
                    method: "DELETE",
                    headers: r,
                  }),
                  [
                    4,
                    O(function () {
                      return fetch(n, a);
                    }),
                  ]
                );
              case 1:
                return (o = i.sent()).ok
                  ? [3, 3]
                  : [4, w("Delete Installation", o)];
              case 2:
                throw i.sent();
              case 3:
                return [2];
            }
          });
        });
      }
      function te(e) {
        return b.create("missing-app-config-values", {
          valueName: e,
        });
      }
      (M = o.a).INTERNAL.registerComponent(
        new s.Component(
          "installations",
          function (e) {
            var t = e.getProvider("app").getImmediate(),
              n = {
                appConfig: (function (e) {
                  var t, n;
                  if (!e || !e.options) throw te("App Configuration");
                  if (!e.name) throw te("App Name");
                  try {
                    for (
                      var r = Object(i.__values)([
                          "projectId",
                          "apiKey",
                          "appId",
                        ]),
                        a = r.next();
                      !a.done;
                      a = r.next()
                    ) {
                      var o = a.value;
                      if (!e.options[o]) throw te(o);
                    }
                  } catch (s) {
                    t = {
                      error: s,
                    };
                  } finally {
                    try {
                      a && !a.done && (n = r.return) && n.call(r);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  return {
                    appName: e.name,
                    projectId: e.options.projectId,
                    apiKey: e.options.apiKey,
                    appId: e.options.appId,
                  };
                })(t),
                platformLoggerProvider: e.getProvider("platform-logger"),
              };
            return {
              app: t,
              getId: function () {
                return (function (e) {
                  return Object(i.__awaiter)(this, void 0, void 0, function () {
                    var t, n, r;
                    return Object(i.__generator)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [4, $(e.appConfig)];
                        case 1:
                          return (
                            (t = i.sent()),
                            (n = t.installationEntry),
                            (r = t.registrationPromise)
                              ? r.catch(console.error)
                              : X(e).catch(console.error),
                            [2, n.fid]
                          );
                      }
                    });
                  });
                })(n);
              },
              getToken: function (e) {
                return (function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    Object(i.__awaiter)(this, void 0, void 0, function () {
                      return Object(i.__generator)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, Z(e.appConfig)];
                          case 1:
                            return n.sent(), [4, X(e, t)];
                          case 2:
                            return [2, n.sent().token];
                        }
                      });
                    })
                  );
                })(n, e);
              },
              delete: function () {
                return (function (e) {
                  return Object(i.__awaiter)(this, void 0, void 0, function () {
                    var t, n;
                    return Object(i.__generator)(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [
                            4,
                            U((t = e.appConfig), function (e) {
                              if (!e || 0 !== e.registrationStatus) return e;
                            }),
                          ];
                        case 1:
                          if (!(n = r.sent())) return [3, 6];
                          if (1 !== n.registrationStatus) return [3, 2];
                          throw b.create("delete-pending-registration");
                        case 2:
                          if (2 !== n.registrationStatus) return [3, 6];
                          if (navigator.onLine) return [3, 3];
                          throw b.create("app-offline");
                        case 3:
                          return [4, ee(t, n)];
                        case 4:
                          return r.sent(), [4, G(t)];
                        case 5:
                          r.sent(), (r.label = 6);
                        case 6:
                          return [2];
                      }
                    });
                  });
                })(n);
              },
              onIdChange: function (e) {
                return (function (e, t) {
                  var r = n.appConfig;
                  return (
                    (function (e, t) {
                      x();
                      var n = D(e),
                        r = N.get(n);
                      r || ((r = new Set()), N.set(n, r)), r.add(t);
                    })(r, t),
                    function () {
                      !(function (e, t) {
                        var n = D(e),
                          r = N.get(n);
                        r && (r.delete(t), 0 === r.size && N.delete(n), F());
                      })(r, t);
                    }
                  );
                })(0, e);
              },
            };
          },
          "PUBLIC"
        )
      ),
        M.registerVersion("@firebase/installations", "0.4.17");
      var ne,
        re = n("q/0M"),
        ie = "firebase_id",
        ae = "origin",
        oe = 6e4,
        se =
          "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
        ce = "https://www.googletagmanager.com/gtag/js",
        ue = (function (e) {
          return (e.EVENT = "event"), (e.SET = "set"), (e.CONFIG = "config"), e;
        })({}),
        le = (function (e) {
          return (
            (e.ADD_SHIPPING_INFO = "add_shipping_info"),
            (e.ADD_PAYMENT_INFO = "add_payment_info"),
            (e.ADD_TO_CART = "add_to_cart"),
            (e.ADD_TO_WISHLIST = "add_to_wishlist"),
            (e.BEGIN_CHECKOUT = "begin_checkout"),
            (e.CHECKOUT_PROGRESS = "checkout_progress"),
            (e.EXCEPTION = "exception"),
            (e.GENERATE_LEAD = "generate_lead"),
            (e.LOGIN = "login"),
            (e.PAGE_VIEW = "page_view"),
            (e.PURCHASE = "purchase"),
            (e.REFUND = "refund"),
            (e.REMOVE_FROM_CART = "remove_from_cart"),
            (e.SCREEN_VIEW = "screen_view"),
            (e.SEARCH = "search"),
            (e.SELECT_CONTENT = "select_content"),
            (e.SELECT_ITEM = "select_item"),
            (e.SELECT_PROMOTION = "select_promotion"),
            (e.SET_CHECKOUT_OPTION = "set_checkout_option"),
            (e.SHARE = "share"),
            (e.SIGN_UP = "sign_up"),
            (e.TIMING_COMPLETE = "timing_complete"),
            (e.VIEW_CART = "view_cart"),
            (e.VIEW_ITEM = "view_item"),
            (e.VIEW_ITEM_LIST = "view_item_list"),
            (e.VIEW_PROMOTION = "view_promotion"),
            (e.VIEW_SEARCH_RESULTS = "view_search_results"),
            e
          );
        })({}),
        fe = new re.Logger("@firebase/analytics");
      function de(e, t, n, r, a, o) {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var s, c, u, l;
          return Object(i.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                (s = r[a]), (i.label = 1);
              case 1:
                return i.trys.push([1, 7, , 8]), s ? [4, t[s]] : [3, 3];
              case 2:
                return i.sent(), [3, 6];
              case 3:
                return [4, Promise.all(n)];
              case 4:
                return (
                  (c = i.sent()),
                  (u = c.find(function (e) {
                    return e.measurementId === a;
                  }))
                    ? [4, t[u.appId]]
                    : [3, 6]
                );
              case 5:
                i.sent(), (i.label = 6);
              case 6:
                return [3, 8];
              case 7:
                return (l = i.sent()), fe.error(l), [3, 8];
              case 8:
                return e(ue.CONFIG, a, o), [2];
            }
          });
        });
      }
      function pe(e, t, n, r, a) {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var o, s, c, u, l, f, d;
          return Object(i.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  i.trys.push([0, 4, , 5]),
                  (o = []),
                  a && a.send_to
                    ? ((s = a.send_to),
                      Array.isArray(s) || (s = [s]),
                      [4, Promise.all(n)])
                    : [3, 2]
                );
              case 1:
                for (
                  c = i.sent(),
                    u = function (e) {
                      var n = c.find(function (t) {
                          return t.measurementId === e;
                        }),
                        r = n && t[n.appId];
                      if (!r) return (o = []), "break";
                      o.push(r);
                    },
                    l = 0,
                    f = s;
                  l < f.length && "break" !== u(f[l]);
                  l++
                );
                i.label = 2;
              case 2:
                return (
                  0 === o.length && (o = Object.values(t)), [4, Promise.all(o)]
                );
              case 3:
                return i.sent(), e(ue.EVENT, r, a || {}), [3, 5];
              case 4:
                return (d = i.sent()), fe.error(d), [3, 5];
              case 5:
                return [2];
            }
          });
        });
      }
      var he =
          (((ne = {})["already-exists"] =
            "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),
          (ne["already-initialized"] =
            "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),
          (ne["interop-component-reg-failed"] =
            "Firebase Analytics Interop Component failed to instantiate: {$reason}"),
          (ne["invalid-analytics-context"] =
            "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),
          (ne["indexeddb-unavailable"] =
            "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),
          (ne["fetch-throttle"] =
            "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),
          (ne["config-fetch-failed"] =
            "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),
          (ne["no-api-key"] =
            'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),
          (ne["no-app-id"] =
            'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),
          ne),
        _e = new c.ErrorFactory("analytics", "Analytics", he),
        be = 30,
        ve = 1e3,
        ge = new ((function () {
          function e(e, t) {
            void 0 === e && (e = {}),
              void 0 === t && (t = ve),
              (this.throttleMetadata = e),
              (this.intervalMillis = t);
          }
          return (
            (e.prototype.getThrottleMetadata = function (e) {
              return this.throttleMetadata[e];
            }),
            (e.prototype.setThrottleMetadata = function (e, t) {
              this.throttleMetadata[e] = t;
            }),
            (e.prototype.deleteThrottleMetadata = function (e) {
              delete this.throttleMetadata[e];
            }),
            e
          );
        })())();
      function me(e) {
        return new Headers({
          Accept: "application/json",
          "x-goog-api-key": e,
        });
      }
      function we(e) {
        var t;
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          var n, r, a, o, s, c;
          return Object(i.__generator)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (n = e.appId),
                  (r = {
                    method: "GET",
                    headers: me(e.apiKey),
                  }),
                  (a = se.replace("{app-id}", n)),
                  [4, fetch(a, r)]
                );
              case 1:
                if (200 === (o = i.sent()).status || 304 === o.status)
                  return [3, 6];
                (s = ""), (i.label = 2);
              case 2:
                return i.trys.push([2, 4, , 5]), [4, o.json()];
              case 3:
                return (
                  (c = i.sent()),
                  (null === (t = c.error) || void 0 === t
                    ? void 0
                    : t.message) && (s = c.error.message),
                  [3, 5]
                );
              case 4:
                return i.sent(), [3, 5];
              case 5:
                throw _e.create("config-fetch-failed", {
                  httpStatus: o.status,
                  responseMessage: s,
                });
              case 6:
                return [2, o.json()];
            }
          });
        });
      }
      function ye(e, t, n, r) {
        var a = t.throttleEndTimeMillis,
          o = t.backoffCount;
        return (
          void 0 === r && (r = ge),
          Object(i.__awaiter)(this, void 0, void 0, function () {
            var t, s, u, l, f, d, p;
            return Object(i.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  (t = e.appId), (s = e.measurementId), (i.label = 1);
                case 1:
                  return i.trys.push([1, 3, , 4]), [4, Ie(n, a)];
                case 2:
                  return i.sent(), [3, 4];
                case 3:
                  if (((u = i.sent()), s))
                    return (
                      fe.warn(
                        "Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID " +
                          s +
                          ' provided in the "measurementId" field in the local Firebase config. [' +
                          u.message +
                          "]"
                      ),
                      [
                        2,
                        {
                          appId: t,
                          measurementId: s,
                        },
                      ]
                    );
                  throw u;
                case 4:
                  return i.trys.push([4, 6, , 7]), [4, we(e)];
                case 5:
                  return (l = i.sent()), r.deleteThrottleMetadata(t), [2, l];
                case 6:
                  if (
                    !(function (e) {
                      if (!(e instanceof c.FirebaseError)) return !1;
                      var t = Number(e.httpStatus);
                      return 429 === t || 500 === t || 503 === t || 504 === t;
                    })((f = i.sent()))
                  ) {
                    if ((r.deleteThrottleMetadata(t), s))
                      return (
                        fe.warn(
                          "Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID " +
                            s +
                            ' provided in the "measurementId" field in the local Firebase config. [' +
                            f.message +
                            "]"
                        ),
                        [
                          2,
                          {
                            appId: t,
                            measurementId: s,
                          },
                        ]
                      );
                    throw f;
                  }
                  return (
                    (d =
                      503 === Number(f.httpStatus)
                        ? Object(c.calculateBackoffMillis)(
                            o,
                            r.intervalMillis,
                            be
                          )
                        : Object(c.calculateBackoffMillis)(
                            o,
                            r.intervalMillis
                          )),
                    (p = {
                      throttleEndTimeMillis: Date.now() + d,
                      backoffCount: o + 1,
                    }),
                    r.setThrottleMetadata(t, p),
                    fe.debug("Calling attemptFetch again in " + d + " millis"),
                    [2, ye(e, p, n, r)]
                  );
                case 7:
                  return [2];
              }
            });
          })
        );
      }
      function Ie(e, t) {
        return new Promise(function (n, r) {
          var i = Math.max(t - Date.now(), 0),
            a = setTimeout(n, i);
          e.addEventListener(function () {
            clearTimeout(a),
              r(
                _e.create("fetch-throttle", {
                  throttleEndTimeMillis: t,
                })
              );
          });
        });
      }
      var Oe,
        je,
        Ee = (function () {
          function e() {
            this.listeners = [];
          }
          return (
            (e.prototype.addEventListener = function (e) {
              this.listeners.push(e);
            }),
            (e.prototype.abort = function () {
              this.listeners.forEach(function (e) {
                return e();
              });
            }),
            e
          );
        })(),
        Te = {},
        Ce = [],
        Se = {},
        De = "dataLayer",
        Ne = "gtag",
        Ae = !1;
      function Pe(e) {
        if (Ae) throw _e.create("already-initialized");
        e.dataLayerName && (De = e.dataLayerName),
          e.gtagName && (Ne = e.gtagName);
      }
      function ke() {
        return Object(i.__awaiter)(this, void 0, void 0, function () {
          return Object(i.__generator)(this, function (e) {
            switch (e.label) {
              case 0:
                if (Object(c.isBrowserExtension)()) return [2, !1];
                if (!Object(c.areCookiesEnabled)()) return [2, !1];
                if (!Object(c.isIndexedDBAvailable)()) return [2, !1];
                e.label = 1;
              case 1:
                return (
                  e.trys.push([1, 3, , 4]),
                  [4, Object(c.validateIndexedDBOpenable)()]
                );
              case 2:
                return [2, e.sent()];
              case 3:
                return e.sent(), [2, !1];
              case 4:
                return [2];
            }
          });
        });
      }
      !(function (e) {
        e.INTERNAL.registerComponent(
          new s.Component(
            "analytics",
            function (e) {
              return (function (e, t) {
                !(function () {
                  var e = [];
                  if (
                    (Object(c.isBrowserExtension)() &&
                      e.push("This is a browser extension environment."),
                    Object(c.areCookiesEnabled)() ||
                      e.push("Cookies are not available."),
                    e.length > 0)
                  ) {
                    var t = e
                        .map(function (e, t) {
                          return "(" + (t + 1) + ") " + e;
                        })
                        .join(" "),
                      n = _e.create("invalid-analytics-context", {
                        errorInfo: t,
                      });
                    fe.warn(n.message);
                  }
                })();
                var n = e.options.appId;
                if (!n) throw _e.create("no-app-id");
                if (!e.options.apiKey) {
                  if (!e.options.measurementId) throw _e.create("no-api-key");
                  fe.warn(
                    'The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ' +
                      e.options.measurementId +
                      ' provided in the "measurementId" field in the local Firebase config.'
                  );
                }
                if (null != Te[n])
                  throw _e.create("already-exists", {
                    id: n,
                  });
                if (!Ae) {
                  (function () {
                    for (
                      var e = window.document.getElementsByTagName("script"),
                        t = 0,
                        n = Object.values(e);
                      t < n.length;
                      t++
                    ) {
                      var r = n[t];
                      if (r.src && r.src.includes(ce)) return r;
                    }
                    return null;
                  })() ||
                    (function (e) {
                      var t = document.createElement("script");
                      (t.src = ce + "?l=" + e),
                        (t.async = !0),
                        document.head.appendChild(t);
                    })(De),
                    (function (e) {
                      var t = [];
                      Array.isArray(window[e])
                        ? (t = window[e])
                        : (window[e] = t);
                    })(De);
                  var r = (function (e, t, n, r, a) {
                    var o = function () {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      window[r].push(arguments);
                    };
                    return (
                      window[a] &&
                        "function" == typeof window[a] &&
                        (o = window[a]),
                      (window[a] = (function (e, t, n, r) {
                        return function (a, o, s) {
                          return Object(i.__awaiter)(
                            this,
                            void 0,
                            void 0,
                            function () {
                              var c;
                              return Object(i.__generator)(this, function (i) {
                                switch (i.label) {
                                  case 0:
                                    return (
                                      i.trys.push([0, 6, , 7]),
                                      a !== ue.EVENT
                                        ? [3, 2]
                                        : [4, pe(e, t, n, o, s)]
                                    );
                                  case 1:
                                    return i.sent(), [3, 5];
                                  case 2:
                                    return a !== ue.CONFIG
                                      ? [3, 4]
                                      : [4, de(e, t, n, r, o, s)];
                                  case 3:
                                    return i.sent(), [3, 5];
                                  case 4:
                                    e(ue.SET, o), (i.label = 5);
                                  case 5:
                                    return [3, 7];
                                  case 6:
                                    return (c = i.sent()), fe.error(c), [3, 7];
                                  case 7:
                                    return [2];
                                }
                              });
                            }
                          );
                        };
                      })(o, Te, Ce, Se)),
                      {
                        gtagCore: o,
                        wrappedGtag: window[a],
                      }
                    );
                  })(0, 0, 0, De, Ne);
                  (je = r.wrappedGtag), (Oe = r.gtagCore), (Ae = !0);
                }
                return (
                  (Te[n] = (function (e, t, n, r, a) {
                    return Object(i.__awaiter)(
                      this,
                      void 0,
                      void 0,
                      function () {
                        var o, s, u, l, f, d, p;
                        return Object(i.__generator)(this, function (h) {
                          switch (h.label) {
                            case 0:
                              return (
                                (o = (function (e, t, n) {
                                  return (
                                    void 0 === t && (t = ge),
                                    Object(i.__awaiter)(
                                      this,
                                      void 0,
                                      void 0,
                                      function () {
                                        var n,
                                          r,
                                          a,
                                          o,
                                          s,
                                          c,
                                          u = this;
                                        return Object(i.__generator)(
                                          this,
                                          function (l) {
                                            if (
                                              ((a = (n = e.options).apiKey),
                                              (o = n.measurementId),
                                              !(r = n.appId))
                                            )
                                              throw _e.create("no-app-id");
                                            if (!a) {
                                              if (o)
                                                return [
                                                  2,
                                                  {
                                                    measurementId: o,
                                                    appId: r,
                                                  },
                                                ];
                                              throw _e.create("no-api-key");
                                            }
                                            return (
                                              (s = t.getThrottleMetadata(r) || {
                                                backoffCount: 0,
                                                throttleEndTimeMillis:
                                                  Date.now(),
                                              }),
                                              (c = new Ee()),
                                              setTimeout(function () {
                                                return Object(i.__awaiter)(
                                                  u,
                                                  void 0,
                                                  void 0,
                                                  function () {
                                                    return Object(
                                                      i.__generator
                                                    )(this, function (e) {
                                                      return c.abort(), [2];
                                                    });
                                                  }
                                                );
                                              }, oe),
                                              [
                                                2,
                                                ye(
                                                  {
                                                    appId: r,
                                                    apiKey: a,
                                                    measurementId: o,
                                                  },
                                                  s,
                                                  c,
                                                  t
                                                ),
                                              ]
                                            );
                                          }
                                        );
                                      }
                                    )
                                  );
                                })(e))
                                  .then(function (t) {
                                    (n[t.measurementId] = t.appId),
                                      e.options.measurementId &&
                                        t.measurementId !==
                                          e.options.measurementId &&
                                        fe.warn(
                                          "The measurement ID in the local Firebase config (" +
                                            e.options.measurementId +
                                            ") does not match the measurement ID fetched from the server (" +
                                            t.measurementId +
                                            "). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config."
                                        );
                                  })
                                  .catch(function (e) {
                                    return fe.error(e);
                                  }),
                                t.push(o),
                                (s = (function () {
                                  return Object(i.__awaiter)(
                                    this,
                                    void 0,
                                    void 0,
                                    function () {
                                      var e;
                                      return Object(i.__generator)(
                                        this,
                                        function (t) {
                                          switch (t.label) {
                                            case 0:
                                              return Object(
                                                c.isIndexedDBAvailable
                                              )()
                                                ? [3, 1]
                                                : (fe.warn(
                                                    _e.create(
                                                      "indexeddb-unavailable",
                                                      {
                                                        errorInfo:
                                                          "IndexedDB is not available in this environment.",
                                                      }
                                                    ).message
                                                  ),
                                                  [2, !1]);
                                            case 1:
                                              return (
                                                t.trys.push([1, 3, , 4]),
                                                [
                                                  4,
                                                  Object(
                                                    c.validateIndexedDBOpenable
                                                  )(),
                                                ]
                                              );
                                            case 2:
                                              return t.sent(), [3, 4];
                                            case 3:
                                              return (
                                                (e = t.sent()),
                                                fe.warn(
                                                  _e.create(
                                                    "indexeddb-unavailable",
                                                    {
                                                      errorInfo: e,
                                                    }
                                                  ).message
                                                ),
                                                [2, !1]
                                              );
                                            case 4:
                                              return [2, !0];
                                          }
                                        }
                                      );
                                    }
                                  );
                                })().then(function (e) {
                                  return e ? r.getId() : void 0;
                                })),
                                [4, Promise.all([o, s])]
                              );
                            case 1:
                              return (
                                (u = h.sent()),
                                (l = u[0]),
                                (f = u[1]),
                                a("js", new Date()),
                                ((p = {})[ae] = "firebase"),
                                (p.update = !0),
                                (d = p),
                                null != f && (d[ie] = f),
                                a(ue.CONFIG, l.measurementId, d),
                                [2, l.measurementId]
                              );
                          }
                        });
                      }
                    );
                  })(e, Ce, Se, t, Oe)),
                  {
                    app: e,
                    logEvent: function (e, t, r) {
                      (function (e, t, n, r, a) {
                        return Object(i.__awaiter)(
                          this,
                          void 0,
                          void 0,
                          function () {
                            var o, s;
                            return Object(i.__generator)(this, function (c) {
                              switch (c.label) {
                                case 0:
                                  return a && a.global
                                    ? (e(ue.EVENT, n, r), [2])
                                    : [3, 1];
                                case 1:
                                  return [4, t];
                                case 2:
                                  (o = c.sent()),
                                    (s = Object(i.__assign)(
                                      Object(i.__assign)({}, r),
                                      {
                                        send_to: o,
                                      }
                                    )),
                                    e(ue.EVENT, n, s),
                                    (c.label = 3);
                                case 3:
                                  return [2];
                              }
                            });
                          }
                        );
                      })(je, Te[n], e, t, r).catch(function (e) {
                        return fe.error(e);
                      });
                    },
                    setCurrentScreen: function (e, t) {
                      (function (e, t, n, r) {
                        return Object(i.__awaiter)(
                          this,
                          void 0,
                          void 0,
                          function () {
                            var a;
                            return Object(i.__generator)(this, function (i) {
                              switch (i.label) {
                                case 0:
                                  return r && r.global
                                    ? (e(ue.SET, {
                                        screen_name: n,
                                      }),
                                      [2, Promise.resolve()])
                                    : [3, 1];
                                case 1:
                                  return [4, t];
                                case 2:
                                  (a = i.sent()),
                                    e(ue.CONFIG, a, {
                                      update: !0,
                                      screen_name: n,
                                    }),
                                    (i.label = 3);
                                case 3:
                                  return [2];
                              }
                            });
                          }
                        );
                      })(je, Te[n], e, t).catch(function (e) {
                        return fe.error(e);
                      });
                    },
                    setUserId: function (e, t) {
                      (function (e, t, n, r) {
                        return Object(i.__awaiter)(
                          this,
                          void 0,
                          void 0,
                          function () {
                            var a;
                            return Object(i.__generator)(this, function (i) {
                              switch (i.label) {
                                case 0:
                                  return r && r.global
                                    ? (e(ue.SET, {
                                        user_id: n,
                                      }),
                                      [2, Promise.resolve()])
                                    : [3, 1];
                                case 1:
                                  return [4, t];
                                case 2:
                                  (a = i.sent()),
                                    e(ue.CONFIG, a, {
                                      update: !0,
                                      user_id: n,
                                    }),
                                    (i.label = 3);
                                case 3:
                                  return [2];
                              }
                            });
                          }
                        );
                      })(je, Te[n], e, t).catch(function (e) {
                        return fe.error(e);
                      });
                    },
                    setUserProperties: function (e, t) {
                      (function (e, t, n, r) {
                        return Object(i.__awaiter)(
                          this,
                          void 0,
                          void 0,
                          function () {
                            var a, o, s, c, u;
                            return Object(i.__generator)(this, function (i) {
                              switch (i.label) {
                                case 0:
                                  if (!r || !r.global) return [3, 1];
                                  for (
                                    a = {}, o = 0, s = Object.keys(n);
                                    o < s.length;
                                    o++
                                  )
                                    a["user_properties." + (c = s[o])] = n[c];
                                  return e(ue.SET, a), [2, Promise.resolve()];
                                case 1:
                                  return [4, t];
                                case 2:
                                  (u = i.sent()),
                                    e(ue.CONFIG, u, {
                                      update: !0,
                                      user_properties: n,
                                    }),
                                    (i.label = 3);
                                case 3:
                                  return [2];
                              }
                            });
                          }
                        );
                      })(je, Te[n], e, t).catch(function (e) {
                        return fe.error(e);
                      });
                    },
                    setAnalyticsCollectionEnabled: function (e) {
                      (function (e, t) {
                        return Object(i.__awaiter)(
                          this,
                          void 0,
                          void 0,
                          function () {
                            var n;
                            return Object(i.__generator)(this, function (r) {
                              switch (r.label) {
                                case 0:
                                  return [4, e];
                                case 1:
                                  return (
                                    (n = r.sent()),
                                    (window["ga-disable-" + n] = !t),
                                    [2]
                                  );
                              }
                            });
                          }
                        );
                      })(Te[n], e).catch(function (e) {
                        return fe.error(e);
                      });
                    },
                    INTERNAL: {
                      delete: function () {
                        return delete Te[n], Promise.resolve();
                      },
                    },
                  }
                );
              })(
                e.getProvider("app").getImmediate(),
                e.getProvider("installations").getImmediate()
              );
            },
            "PUBLIC"
          ).setServiceProps({
            settings: Pe,
            EventName: le,
            isSupported: ke,
          })
        ),
          e.INTERNAL.registerComponent(
            new s.Component(
              "analytics-internal",
              function (e) {
                try {
                  return {
                    logEvent: e.getProvider("analytics").getImmediate()
                      .logEvent,
                  };
                } catch (t) {
                  throw _e.create("interop-component-reg-failed", {
                    reason: t,
                  });
                }
              },
              "PRIVATE"
            )
          ),
          e.registerVersion("@firebase/analytics", "0.6.0");
      })(o.a);
    },
    nbvr: function (e, t, n) {
      !(function (e) {
        "use strict";
        function t(e) {
          return Array.prototype.slice.call(e);
        }
        function n(e) {
          return new Promise(function (t, n) {
            (e.onsuccess = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                n(e.error);
              });
          });
        }
        function r(e, t, r) {
          var i,
            a = new Promise(function (a, o) {
              n((i = e[t].apply(e, r))).then(a, o);
            });
          return (a.request = i), a;
        }
        function i(e, t, n) {
          var i = r(e, t, n);
          return i.then(function (e) {
            if (e) return new l(e, i.request);
          });
        }
        function a(e, t, n) {
          n.forEach(function (n) {
            Object.defineProperty(e.prototype, n, {
              get: function () {
                return this[t][n];
              },
              set: function (e) {
                this[t][n] = e;
              },
            });
          });
        }
        function o(e, t, n, i) {
          i.forEach(function (i) {
            i in n.prototype &&
              (e.prototype[i] = function () {
                return r(this[t], i, arguments);
              });
          });
        }
        function s(e, t, n, r) {
          r.forEach(function (r) {
            r in n.prototype &&
              (e.prototype[r] = function () {
                return this[t][r].apply(this[t], arguments);
              });
          });
        }
        function c(e, t, n, r) {
          r.forEach(function (r) {
            r in n.prototype &&
              (e.prototype[r] = function () {
                return i(this[t], r, arguments);
              });
          });
        }
        function u(e) {
          this._index = e;
        }
        function l(e, t) {
          (this._cursor = e), (this._request = t);
        }
        function f(e) {
          this._store = e;
        }
        function d(e) {
          (this._tx = e),
            (this.complete = new Promise(function (t, n) {
              (e.oncomplete = function () {
                t();
              }),
                (e.onerror = function () {
                  n(e.error);
                }),
                (e.onabort = function () {
                  n(e.error);
                });
            }));
        }
        function p(e, t, n) {
          (this._db = e), (this.oldVersion = t), (this.transaction = new d(n));
        }
        function h(e) {
          this._db = e;
        }
        a(u, "_index", ["name", "keyPath", "multiEntry", "unique"]),
          o(u, "_index", IDBIndex, [
            "get",
            "getKey",
            "getAll",
            "getAllKeys",
            "count",
          ]),
          c(u, "_index", IDBIndex, ["openCursor", "openKeyCursor"]),
          a(l, "_cursor", ["direction", "key", "primaryKey", "value"]),
          o(l, "_cursor", IDBCursor, ["update", "delete"]),
          ["advance", "continue", "continuePrimaryKey"].forEach(function (e) {
            e in IDBCursor.prototype &&
              (l.prototype[e] = function () {
                var t = this,
                  r = arguments;
                return Promise.resolve().then(function () {
                  return (
                    t._cursor[e].apply(t._cursor, r),
                    n(t._request).then(function (e) {
                      if (e) return new l(e, t._request);
                    })
                  );
                });
              });
          }),
          (f.prototype.createIndex = function () {
            return new u(this._store.createIndex.apply(this._store, arguments));
          }),
          (f.prototype.index = function () {
            return new u(this._store.index.apply(this._store, arguments));
          }),
          a(f, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]),
          o(f, "_store", IDBObjectStore, [
            "put",
            "add",
            "delete",
            "clear",
            "get",
            "getAll",
            "getKey",
            "getAllKeys",
            "count",
          ]),
          c(f, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]),
          s(f, "_store", IDBObjectStore, ["deleteIndex"]),
          (d.prototype.objectStore = function () {
            return new f(this._tx.objectStore.apply(this._tx, arguments));
          }),
          a(d, "_tx", ["objectStoreNames", "mode"]),
          s(d, "_tx", IDBTransaction, ["abort"]),
          (p.prototype.createObjectStore = function () {
            return new f(this._db.createObjectStore.apply(this._db, arguments));
          }),
          a(p, "_db", ["name", "version", "objectStoreNames"]),
          s(p, "_db", IDBDatabase, ["deleteObjectStore", "close"]),
          (h.prototype.transaction = function () {
            return new d(this._db.transaction.apply(this._db, arguments));
          }),
          a(h, "_db", ["name", "version", "objectStoreNames"]),
          s(h, "_db", IDBDatabase, ["close"]),
          ["openCursor", "openKeyCursor"].forEach(function (e) {
            [f, u].forEach(function (n) {
              e in n.prototype &&
                (n.prototype[e.replace("open", "iterate")] = function () {
                  var n = t(arguments),
                    r = n[n.length - 1],
                    i = this._store || this._index,
                    a = i[e].apply(i, n.slice(0, -1));
                  a.onsuccess = function () {
                    r(a.result);
                  };
                });
            });
          }),
          [u, f].forEach(function (e) {
            e.prototype.getAll ||
              (e.prototype.getAll = function (e, t) {
                var n = this,
                  r = [];
                return new Promise(function (i) {
                  n.iterateCursor(e, function (e) {
                    e
                      ? (r.push(e.value),
                        void 0 === t || r.length != t ? e.continue() : i(r))
                      : i(r);
                  });
                });
              });
          }),
          (e.openDb = function (e, t, n) {
            var i = r(indexedDB, "open", [e, t]),
              a = i.request;
            return (
              a &&
                (a.onupgradeneeded = function (e) {
                  n && n(new p(a.result, e.oldVersion, a.transaction));
                }),
              i.then(function (e) {
                return new h(e);
              })
            );
          }),
          (e.deleteDb = function (e) {
            return r(indexedDB, "deleteDatabase", [e]);
          }),
          Object.defineProperty(e, "__esModule", {
            value: !0,
          });
      })(t);
    },
  },
]);
