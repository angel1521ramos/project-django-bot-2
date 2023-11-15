"use strict";
var KTFormsWidget1 = {
  init: function () {
    !(function () {
      var e = document.querySelector("#kt_forms_widget_1_select_1");
      if (e) {
        var t = function (e) {
          if (!e.id) return e.text;
          var t = document.createElement("span"),
            a = "";
          return (
            (a +=
              '<img src="' +
              e.element.getAttribute("data-kt-select2-icon") +
              '" class="rounded-circle h-20px me-2" alt="image"/>'),
            (a += e.text),
            (t.innerHTML = a),
            $(t)
          );
        };
        $(e).select2({
          placeholder: "Select coin",
          minimumResultsForSearch: 1 / 0,
          templateSelection: t,
          templateResult: t,
        });
      }
    })(),
      (function () {
        var e = document.querySelector("#kt_forms_widget_1_select_2");
        if (e) {
          var t = function (e) {
            if (!e.id) return e.text;
            var t = document.createElement("span"),
              a = "";
            return (
              (a +=
                '<img src="' +
                e.element.getAttribute("data-kt-select2-icon") +
                '" class="rounded-circle h-20px me-2" alt="image"/>'),
              (a += e.text),
              (t.innerHTML = a),
              $(t)
            );
          };
          $(e).select2({
            placeholder: "Select coin",
            minimumResultsForSearch: 1 / 0,
            templateSelection: t,
            templateResult: t,
          });
        }
      })();
  },
};
"undefined" != typeof module && (module.exports = KTFormsWidget1),
  KTUtil.onDOMContentLoaded(function () {
    KTFormsWidget1.init();
  });
var KTCardsWidget1 = {
  init: function () {
    !(function () {
      var e = document.getElementById("kt_card_widget_1_chart");
      if (e) {
        var t = e.getAttribute("data-kt-chart-color"),
          a = parseInt(KTUtil.css(e, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-500"),
          r = KTUtil.isHexColor(t)
            ? t
            : KTUtil.getCssVariableValue("--bs-" + t),
          o = KTUtil.getCssVariableValue("--bs-gray-300"),
          i = new ApexCharts(e, {
            series: [
              {
                name: "Sales",
                data: [30, 75, 55, 45, 30, 60, 75, 50],
                margin: { left: 5, right: 5 },
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "bar",
              height: a,
              toolbar: { show: !1 },
              sparkline: { enabled: !0 },
            },
            plotOptions: {
              bar: { horizontal: !1, columnWidth: ["35%"], borderRadius: 6 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            stroke: { show: !0, width: 4, colors: ["transparent"] },
            xaxis: {
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1, style: { colors: l, fontSize: "12px" } },
              crosshairs: { show: !1 },
            },
            yaxis: {
              labels: { show: !1, style: { colors: l, fontSize: "12px" } },
            },
            fill: { type: "solid" },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              x: {
                formatter: function (e) {
                  return "Feb: " + e;
                },
              },
              y: {
                formatter: function (e) {
                  return e + "%";
                },
              },
            },
            colors: [r, o],
            grid: {
              borderColor: !1,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
              padding: { top: 10, left: 25, right: 25 },
            },
          });
        setTimeout(function () {
          i.render();
        }, 300);
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTCardsWidget1),
  KTUtil.onDOMContentLoaded(function () {
    KTCardsWidget1.init();
  });
var KTCardsWidget10 = {
  init: function () {
    !(function () {
      var e = document.getElementById("kt_card_widget_10_chart");
      if (e) {
        var t = {
            size: e.getAttribute("data-kt-size")
              ? parseInt(e.getAttribute("data-kt-size"))
              : 70,
            lineWidth: e.getAttribute("data-kt-line")
              ? parseInt(e.getAttribute("data-kt-line"))
              : 11,
            rotate: e.getAttribute("data-kt-rotate")
              ? parseInt(e.getAttribute("data-kt-rotate"))
              : 145,
          },
          a = document.createElement("canvas"),
          l = document.createElement("span");
        "undefined" != typeof G_vmlCanvasManager &&
          G_vmlCanvasManager.initElement(a);
        var r = a.getContext("2d");
        (a.width = a.height = t.size),
          e.appendChild(l),
          e.appendChild(a),
          r.translate(t.size / 2, t.size / 2),
          r.rotate((t.rotate / 180 - 0.5) * Math.PI);
        var o = (t.size - t.lineWidth) / 2,
          i = function (e, t, a) {
            (a = Math.min(Math.max(0, a || 1), 1)),
              r.beginPath(),
              r.arc(0, 0, o, 0, 2 * Math.PI * a, !1),
              (r.strokeStyle = e),
              (r.lineCap = "round"),
              (r.lineWidth = t),
              r.stroke();
          };
        i("#E4E6EF", t.lineWidth, 1),
          i(KTUtil.getCssVariableValue("--bs-primary"), t.lineWidth, 100 / 150),
          i(KTUtil.getCssVariableValue("--bs-success"), t.lineWidth, 0.4);
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTCardsWidget10),
  KTUtil.onDOMContentLoaded(function () {
    KTCardsWidget10.init();
  });
var KTCardWidget12 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_card_widget_12_chart");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          r = KTUtil.getCssVariableValue("--bs-gray-800"),
          o = {
            series: [
              {
                name: "Sales",
                data: [
                  3.5, 5.7, 2.8, 5.9, 4.2, 5.6, 4.3, 4.5, 5.9, 4.5, 5.7, 4.8,
                  5.7,
                ],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: { type: "solid", opacity: 0 },
            stroke: { curve: "smooth", show: !0, width: 2, colors: [r] },
            xaxis: {
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1 },
              crosshairs: {
                position: "front",
                stroke: { color: r, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: { labels: { show: !1 } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              x: {
                formatter: function (e) {
                  return "Feb " + e;
                },
              },
              y: {
                formatter: function (e) {
                  return "10" * e + "K";
                },
              },
            },
            colors: [KTUtil.getCssVariableValue("--bs-success")],
            grid: {
              borderColor: l,
              strokeDashArray: 4,
              padding: { top: 0, right: -20, bottom: -20, left: -20 },
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: r, strokeWidth: 2 },
          };
        (e.self = new ApexCharts(t, o)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTCardWidget12),
  KTUtil.onDOMContentLoaded(function () {
    KTCardWidget12.init();
  });
var KTCardWidget13 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_card_widget_13_chart");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          r = KTUtil.getCssVariableValue("--bs-gray-800"),
          o = {
            series: [
              {
                name: "Shipments",
                data: [1.5, 4.5, 2, 3, 2, 4, 2.5, 2, 2.5, 4, 3.5, 4.5, 2.5],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: { type: "solid", opacity: 0 },
            stroke: { curve: "smooth", show: !0, width: 2, colors: [r] },
            xaxis: {
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1 },
              crosshairs: {
                position: "front",
                stroke: { color: r, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: { labels: { show: !1 } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              x: {
                formatter: function (e) {
                  return "Feb " + e;
                },
              },
              y: {
                formatter: function (e) {
                  return "10" * e + "K";
                },
              },
            },
            colors: [KTUtil.getCssVariableValue("--bs-success")],
            grid: {
              borderColor: l,
              strokeDashArray: 4,
              padding: { top: 0, right: -20, bottom: -20, left: -20 },
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: r, strokeWidth: 2 },
          };
        (e.self = new ApexCharts(t, o)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTCardWidget13),
  KTUtil.onDOMContentLoaded(function () {
    KTCardWidget13.init();
  });
var KTCardsWidget17 = {
  init: function () {
    !(function () {
      var e = document.getElementById("kt_card_widget_17_chart");
      if (e) {
        var t = {
            size: e.getAttribute("data-kt-size")
              ? parseInt(e.getAttribute("data-kt-size"))
              : 70,
            lineWidth: e.getAttribute("data-kt-line")
              ? parseInt(e.getAttribute("data-kt-line"))
              : 11,
            rotate: e.getAttribute("data-kt-rotate")
              ? parseInt(e.getAttribute("data-kt-rotate"))
              : 145,
          },
          a = document.createElement("canvas"),
          l = document.createElement("span");
        "undefined" != typeof G_vmlCanvasManager &&
          G_vmlCanvasManager.initElement(a);
        var r = a.getContext("2d");
        (a.width = a.height = t.size),
          e.appendChild(l),
          e.appendChild(a),
          r.translate(t.size / 2, t.size / 2),
          r.rotate((t.rotate / 180 - 0.5) * Math.PI);
        var o = (t.size - t.lineWidth) / 2,
          i = function (e, t, a) {
            (a = Math.min(Math.max(0, a || 1), 1)),
              r.beginPath(),
              r.arc(0, 0, o, 0, 2 * Math.PI * a, !1),
              (r.strokeStyle = e),
              (r.lineCap = "round"),
              (r.lineWidth = t),
              r.stroke();
          };
        i("#E4E6EF", t.lineWidth, 1),
          i(KTUtil.getCssVariableValue("--bs-primary"), t.lineWidth, 100 / 150),
          i(KTUtil.getCssVariableValue("--bs-success"), t.lineWidth, 0.4);
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTCardsWidget17),
  KTUtil.onDOMContentLoaded(function () {
    KTCardsWidget17.init();
  });
var KTCardsWidget19 = {
  init: function () {
    !(function () {
      var e = document.getElementById("kt_card_widget_19_chart");
      if (e) {
        var t = {
            size: e.getAttribute("data-kt-size")
              ? parseInt(e.getAttribute("data-kt-size"))
              : 70,
            lineWidth: e.getAttribute("data-kt-line")
              ? parseInt(e.getAttribute("data-kt-line"))
              : 11,
            rotate: e.getAttribute("data-kt-rotate")
              ? parseInt(e.getAttribute("data-kt-rotate"))
              : 145,
          },
          a = document.createElement("canvas"),
          l = document.createElement("span");
        "undefined" != typeof G_vmlCanvasManager &&
          G_vmlCanvasManager.initElement(a);
        var r = a.getContext("2d");
        (a.width = a.height = t.size),
          e.appendChild(l),
          e.appendChild(a),
          r.translate(t.size / 2, t.size / 2),
          r.rotate((t.rotate / 180 - 0.5) * Math.PI);
        var o = (t.size - t.lineWidth) / 2,
          i = function (e, t, a) {
            (a = Math.min(Math.max(0, a || 1), 1)),
              r.beginPath(),
              r.arc(0, 0, o, 0, 2 * Math.PI * a, !1),
              (r.strokeStyle = e),
              (r.lineCap = "round"),
              (r.lineWidth = t),
              r.stroke();
          };
        i("#E4E6EF", t.lineWidth, 1),
          i(KTUtil.getCssVariableValue("--bs-primary"), t.lineWidth, 100 / 150),
          i(KTUtil.getCssVariableValue("--bs-success"), t.lineWidth, 0.4);
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTCardsWidget19),
  KTUtil.onDOMContentLoaded(function () {
    KTCardsWidget19.init();
  });
var KTCardsWidget4 = {
  init: function () {
    !(function () {
      var e = document.getElementById("kt_card_widget_4_chart");
      if (e) {
        var t = {
            size: e.getAttribute("data-kt-size")
              ? parseInt(e.getAttribute("data-kt-size"))
              : 70,
            lineWidth: e.getAttribute("data-kt-line")
              ? parseInt(e.getAttribute("data-kt-line"))
              : 11,
            rotate: e.getAttribute("data-kt-rotate")
              ? parseInt(e.getAttribute("data-kt-rotate"))
              : 145,
          },
          a = document.createElement("canvas"),
          l = document.createElement("span");
        "undefined" != typeof G_vmlCanvasManager &&
          G_vmlCanvasManager.initElement(a);
        var r = a.getContext("2d");
        (a.width = a.height = t.size),
          e.appendChild(l),
          e.appendChild(a),
          r.translate(t.size / 2, t.size / 2),
          r.rotate((t.rotate / 180 - 0.5) * Math.PI);
        var o = (t.size - t.lineWidth) / 2,
          i = function (e, t, a) {
            (a = Math.min(Math.max(0, a || 1), 1)),
              r.beginPath(),
              r.arc(0, 0, o, 0, 2 * Math.PI * a, !1),
              (r.strokeStyle = e),
              (r.lineCap = "round"),
              (r.lineWidth = t),
              r.stroke();
          };
        i("#E4E6EF", t.lineWidth, 1),
          i(KTUtil.getCssVariableValue("--bs-danger"), t.lineWidth, 100 / 150),
          i(KTUtil.getCssVariableValue("--bs-primary"), t.lineWidth, 0.4);
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTCardsWidget4),
  KTUtil.onDOMContentLoaded(function () {
    KTCardsWidget4.init();
  });
var KTCardsWidget6 = {
  init: function () {
    !(function () {
      var e = document.getElementById("kt_card_widget_6_chart");
      if (e) {
        var t = parseInt(KTUtil.css(e, "height")),
          a = KTUtil.getCssVariableValue("--bs-gray-500"),
          l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          r = KTUtil.getCssVariableValue("--bs-primary"),
          o = KTUtil.getCssVariableValue("--bs-gray-300"),
          i = new ApexCharts(e, {
            series: [{ name: "Sales", data: [30, 60, 53, 45, 60, 75, 53] }],
            chart: {
              fontFamily: "inherit",
              type: "bar",
              height: t,
              toolbar: { show: !1 },
              sparkline: { enabled: !0 },
            },
            plotOptions: {
              bar: { horizontal: !1, columnWidth: ["55%"], borderRadius: 6 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            stroke: { show: !0, width: 9, colors: ["transparent"] },
            xaxis: {
              axisBorder: { show: !1 },
              axisTicks: { show: !1, tickPlacement: "between" },
              labels: { show: !1, style: { colors: a, fontSize: "12px" } },
              crosshairs: { show: !1 },
            },
            yaxis: {
              labels: { show: !1, style: { colors: a, fontSize: "12px" } },
            },
            fill: { type: "solid" },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              x: {
                formatter: function (e) {
                  return "Feb: " + e;
                },
              },
              y: {
                formatter: function (e) {
                  return e + "%";
                },
              },
            },
            colors: [r, o],
            grid: {
              padding: { left: 10, right: 10 },
              borderColor: l,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
          });
        setTimeout(function () {
          i.render();
        }, 300);
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTCardsWidget6),
  KTUtil.onDOMContentLoaded(function () {
    KTCardsWidget6.init();
  });
var KTCardWidget8 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_card_widget_8_chart");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          r = KTUtil.getCssVariableValue("--bs-gray-800"),
          o = {
            series: [
              {
                name: "Sales",
                data: [
                  4.5, 5.7, 2.8, 5.9, 4.2, 5.6, 5.2, 4.5, 5.9, 4.5, 5.7, 4.8,
                  5.7,
                ],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: { type: "solid", opacity: 0 },
            stroke: { curve: "smooth", show: !0, width: 2, colors: [r] },
            xaxis: {
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1 },
              crosshairs: {
                position: "front",
                stroke: { color: r, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: { labels: { show: !1 } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              x: {
                formatter: function (e) {
                  return "Feb " + e;
                },
              },
              y: {
                formatter: function (e) {
                  return "$" + e + "K";
                },
              },
            },
            colors: [KTUtil.getCssVariableValue("--bs-success")],
            grid: {
              borderColor: l,
              strokeDashArray: 4,
              padding: { top: 0, right: -20, bottom: -20, left: -20 },
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: r, strokeWidth: 2 },
          };
        (e.self = new ApexCharts(t, o)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTCardWidget8),
  KTUtil.onDOMContentLoaded(function () {
    KTCardWidget8.init();
  });
var KTCardWidget9 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_card_widget_9_chart");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          r = KTUtil.getCssVariableValue("--bs-gray-800"),
          o = {
            series: [
              {
                name: "Visitors",
                data: [1.5, 2.5, 2, 3, 2, 4, 2.5, 2, 2.5, 4, 2.5, 4.5, 2.5],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: { type: "solid", opacity: 0 },
            stroke: { curve: "smooth", show: !0, width: 2, colors: [r] },
            xaxis: {
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1 },
              crosshairs: {
                position: "front",
                stroke: { color: r, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: { labels: { show: !1 } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              x: {
                formatter: function (e) {
                  return "Feb " + e;
                },
              },
              y: {
                formatter: function (e) {
                  return e + "K";
                },
              },
            },
            colors: [KTUtil.getCssVariableValue("--bs-success")],
            grid: {
              borderColor: l,
              strokeDashArray: 4,
              padding: { top: 0, right: -20, bottom: -20, left: -20 },
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: r, strokeWidth: 2 },
          };
        (e.self = new ApexCharts(t, o)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTCardWidget9),
  KTUtil.onDOMContentLoaded(function () {
    KTCardWidget9.init();
  });
var KTTimelineWidget24 = {
  init: function () {
    var e;
    (e = document.querySelector("#kt_list_widget_24")) &&
      KTUtil.on(e, '[data-kt-element="follow"]', "click", function (e) {
        "Following" === this.innerText
          ? ((this.innerText = "Follow"),
            this.classList.add("btn-light-primary"),
            this.classList.remove("btn-primary"),
            this.blur())
          : ((this.innerText = "Following"),
            this.classList.add("btn-primary"),
            this.classList.remove("btn-light-primary"),
            this.blur());
      });
  },
};
"undefined" != typeof module && (module.exports = KTTimelineWidget24),
  KTUtil.onDOMContentLoaded(function () {
    KTTimelineWidget24.init();
  });
var KTMapsWidget1 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_maps_widget_1_map");
        if (e) {
          var t,
            a = function () {
              (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
              var a = t.container.children.push(
                  am5map.MapChart.new(t, {
                    panX: "translateX",
                    panY: "translateY",
                    projection: am5map.geoMercator(),
                    paddingLeft: 0,
                    paddingrIGHT: 0,
                    paddingBottom: 0,
                  })
                ),
                l = a.series.push(
                  am5map.MapPolygonSeries.new(t, {
                    geoJSON: am5geodata_worldLow,
                    exclude: ["AQ"],
                  })
                );
              l.mapPolygons.template.setAll({
                tooltipText: "{name}",
                toggleKey: "active",
                interactive: !0,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-300")),
              }),
                l.mapPolygons.template.states.create("hover", {
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                }),
                l.mapPolygons.template.states.create("active", {
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                });
              var r = a.series.push(
                am5map.MapPolygonSeries.new(t, {
                  geoJSON: am5geodata_worldLow,
                  include: ["US", "BR", "DE", "AU", "JP"],
                })
              );
              r.mapPolygons.template.setAll({
                tooltipText: "{name}",
                toggleKey: "active",
                interactive: !0,
              }),
                am5.ColorSet.new(t, {}),
                r.mapPolygons.template.set(
                  "fill",
                  am5.color(KTUtil.getCssVariableValue("--bs-primary"))
                ),
                r.mapPolygons.template.states.create("hover", {
                  fill: t.interfaceColors.get("primaryButtonHover"),
                }),
                r.mapPolygons.template.states.create("active", {
                  fill: t.interfaceColors.get("primaryButtonHover"),
                }),
                a.chartContainer
                  .get("background")
                  .events.on("click", function () {
                    a.goHome();
                  }),
                a.appear(1e3, 100);
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTMapsWidget1),
  KTUtil.onDOMContentLoaded(function () {
    KTMapsWidget1.init();
  });
var KTMapsWidget2 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_maps_widget_2_map");
        if (e) {
          var t,
            a = function () {
              (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
              var a = t.container.children.push(
                  am5map.MapChart.new(t, {
                    panX: "translateX",
                    panY: "translateY",
                    projection: am5map.geoMercator(),
                    paddingLeft: 0,
                    paddingrIGHT: 0,
                    paddingBottom: 0,
                  })
                ),
                l = a.series.push(
                  am5map.MapPolygonSeries.new(t, {
                    geoJSON: am5geodata_worldLow,
                    exclude: ["AQ"],
                  })
                );
              l.mapPolygons.template.setAll({
                tooltipText: "{name}",
                toggleKey: "active",
                interactive: !0,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-300")),
              }),
                l.mapPolygons.template.states.create("hover", {
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                }),
                l.mapPolygons.template.states.create("active", {
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                });
              var r = a.series.push(
                am5map.MapPolygonSeries.new(t, {
                  geoJSON: am5geodata_worldLow,
                  include: ["US", "BR", "DE", "AU", "JP"],
                })
              );
              r.mapPolygons.template.setAll({
                tooltipText: "{name}",
                toggleKey: "active",
                interactive: !0,
              }),
                am5.ColorSet.new(t, {}),
                r.mapPolygons.template.set(
                  "fill",
                  am5.color(KTUtil.getCssVariableValue("--bs-primary"))
                ),
                r.mapPolygons.template.states.create("hover", {
                  fill: t.interfaceColors.get("primaryButtonHover"),
                }),
                r.mapPolygons.template.states.create("active", {
                  fill: t.interfaceColors.get("primaryButtonHover"),
                }),
                a.chartContainer
                  .get("background")
                  .events.on("click", function () {
                    a.goHome();
                  }),
                a.appear(1e3, 100);
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTMapsWidget2),
  KTUtil.onDOMContentLoaded(function () {
    KTMapsWidget2.init();
  });
var KTPlayersWidget1 = {
  init: function () {
    KTUtil.on(
      document.body,
      '[data-kt-element="list-play-button"]',
      "click",
      function (e) {
        var t = this,
          a = document.querySelector('[data-kt-element="audio-track-1"]'),
          l = this.querySelector('[data-kt-element="list-play-icon"]'),
          r = this.querySelector('[data-kt-element="list-pause-icon"]');
        r.classList.contains("d-none")
          ? (a.play(), l.classList.add("d-none"), r.classList.remove("d-none"))
          : (a.pause(),
            l.classList.remove("d-none"),
            r.classList.add("d-none")),
          [].slice
            .call(
              document.querySelectorAll('[data-kt-element="list-play-button"]')
            )
            .map(function (e) {
              if (e !== t) {
                var a = e.querySelector('[data-kt-element="list-play-icon"]'),
                  l = e.querySelector('[data-kt-element="list-pause-icon"]');
                a.classList.remove("d-none"), l.classList.add("d-none");
              }
            });
      }
    );
  },
};
"undefined" != typeof module && (module.exports = KTPlayersWidget1),
  window.addEventListener("load", function () {
    KTPlayersWidget1.init();
  });
var KTPlayersWidget2 = (function () {
  var e = function () {
    var e = document.getElementById("kt_player_widget_2");
    if (e) {
      var t = e.querySelector('[data-kt-element="audio-track-1"]'),
        a = e.querySelector('[data-kt-element="progress"]'),
        l = e.querySelector('[data-kt-element="current-time"]'),
        r = e.querySelector('[data-kt-element="duration"]'),
        o = e.querySelector('[data-kt-element="play-button"]'),
        i = e.querySelector('[data-kt-element="play-icon"]'),
        s = e.querySelector('[data-kt-element="pause-icon"]'),
        n = e.querySelector('[data-kt-element="replay-button"]'),
        d = e.querySelector('[data-kt-element="shuffle-button"]'),
        m = e.querySelector('[data-kt-element="play-next-button"]'),
        c = e.querySelector('[data-kt-element="play-prev-button"]'),
        g = function (e) {
          var t = parseInt(e % 60);
          return parseInt((e / 60) % 60) + ":" + (t < 10 ? "0" : "") + t;
        };
      r.innerHTML = g(t.duration);
      t.addEventListener("timeupdate", function () {
        (l.innerHTML = g(t.currentTime)),
          (a.value = (t.currentTime / t.duration) * 100),
          this.ended &&
            (i.classList.remove("d-none"), s.classList.add("d-none"));
      }),
        o.addEventListener("click", function () {
          t.duration > 0 && !t.paused
            ? (t.pause(),
              i.classList.remove("d-none"),
              s.classList.add("d-none"))
            : t.readyState >= 2 &&
              (t.play(),
              i.classList.add("d-none"),
              s.classList.remove("d-none"));
        }),
        n.addEventListener("click", function () {
          t.readyState >= 2 &&
            ((t.currentTime = 0),
            t.play(),
            i.classList.add("d-none"),
            s.classList.remove("d-none"));
        }),
        c.addEventListener("click", function () {
          t.readyState >= 2 &&
            ((t.currentTime = 0),
            t.play(),
            i.classList.add("d-none"),
            s.classList.remove("d-none"));
        }),
        m.addEventListener("click", function () {
          t.readyState >= 2 &&
            ((t.currentTime = 0),
            t.play(),
            i.classList.add("d-none"),
            s.classList.remove("d-none"));
        }),
        d.addEventListener("click", function () {
          t.readyState >= 2 &&
            ((t.currentTime = 0),
            t.play(),
            i.classList.add("d-none"),
            s.classList.remove("d-none"));
        }),
        a.addEventListener("change", function () {
          (t.currentTime = a.value),
            i.classList.add("d-none"),
            s.classList.remove("d-none"),
            t.play();
        });
    }
  };
  return {
    init: function () {
      e();
    },
  };
})();
"undefined" != typeof module && (module.exports = KTPlayersWidget2),
  window.addEventListener("load", function () {
    KTPlayersWidget2.init();
  });
var KTSlidersWidget1 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = function (e, t, a) {
      var l = document.querySelector(t);
      if (l && (!0 !== e.rendered || !l.classList.contains("initialized"))) {
        var r = parseInt(KTUtil.css(l, "height")),
          o = KTUtil.getCssVariableValue("--bs-primary"),
          i = {
            series: [a],
            chart: {
              fontFamily: "inherit",
              height: r,
              type: "radialBar",
              sparkline: { enabled: !0 },
            },
            plotOptions: {
              radialBar: {
                hollow: { margin: 0, size: "45%" },
                dataLabels: {
                  showOn: "always",
                  name: { show: !1 },
                  value: { show: !1 },
                },
                track: {
                  background: KTUtil.getCssVariableValue("--bs-primary-light"),
                  strokeWidth: "100%",
                },
              },
            },
            colors: [o],
            stroke: { lineCap: "round" },
            labels: ["Progress"],
          };
        (e.self = new ApexCharts(l, i)),
          e.self.render(),
          (e.rendered = !0),
          l.classList.add("initialized");
      }
    };
  return {
    init: function () {
      l(e, "#kt_slider_widget_1_chart_1", 76);
      var r = document.querySelector("#kt_sliders_widget_1_slider");
      r &&
        (r.addEventListener("slid.bs.carousel", function (e) {
          1 === e.to && l(t, "#kt_slider_widget_1_chart_2", 55),
            2 === e.to && l(a, "#kt_slider_widget_1_chart_3", 25);
        }),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && (e.self.destroy(), (e.rendered = !1)),
            t.rendered && (t.self.destroy(), (t.rendered = !1)),
            a.rendered && (a.self.destroy(), (a.rendered = !1)),
            l(e, "#kt_slider_widget_1_chart_1", 76),
            l(t, "#kt_slider_widget_1_chart_2", 55),
            l(a, "#kt_slider_widget_1_chart_3", 25);
        }));
    },
  };
})();
"undefined" != typeof module && (module.exports = KTSlidersWidget1),
  KTUtil.onDOMContentLoaded(function () {
    KTSlidersWidget1.init();
  });
var KTSlidersWidget3 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = function (e, t, a, l) {
      var r = document.querySelector(t);
      if (r && (!0 !== e.rendered || !r.classList.contains("initialized"))) {
        var o = parseInt(KTUtil.css(r, "height")),
          i = KTUtil.getCssVariableValue("--bs-gray-500"),
          s = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          n = KTUtil.getCssVariableValue("--bs-" + a),
          d = {
            series: [{ name: "Lessons", data: l }],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: o,
              toolbar: { show: !1 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 80, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [n] },
            xaxis: {
              categories: [
                "",
                "Apr 05",
                "Apr 06",
                "Apr 07",
                "Apr 08",
                "Apr 09",
                "Apr 11",
                "Apr 12",
                "Apr 14",
                "Apr 15",
                "Apr 16",
                "Apr 17",
                "Apr 18",
                "",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              tickAmount: 6,
              labels: {
                rotate: 0,
                rotateAlways: !0,
                style: { colors: i, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: n, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              tickAmount: 4,
              max: 24,
              min: 10,
              labels: { style: { colors: i, fontSize: "12px" } },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: { style: { fontSize: "12px" } },
            colors: [n],
            grid: {
              borderColor: s,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: n, strokeWidth: 3 },
          };
        (e.self = new ApexCharts(r, d)),
          e.self.render(),
          (e.rendered = !0),
          r.classList.add("initialized");
      }
    };
  return {
    init: function () {
      var l = [19, 21, 21, 20, 20, 18, 18, 20, 20, 22, 22, 21, 21, 22],
        r = [18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20, 20, 22];
      a(e, "#kt_sliders_widget_3_chart_1", "danger", l);
      var o = document.querySelector("#kt_sliders_widget_3_slider");
      o &&
        (o.addEventListener("slid.bs.carousel", function (e) {
          1 === e.to && a(t, "#kt_sliders_widget_3_chart_2", "primary", r);
        }),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && (e.self.destroy(), (e.rendered = !1)),
            t.rendered && (t.self.destroy(), (t.rendered = !1)),
            a(e, "#kt_sliders_widget_3_chart_1", "danger", l),
            a(t, "#kt_sliders_widget_3_chart_2", "primary", r);
        }));
    },
  };
})();
"undefined" != typeof module && (module.exports = KTSlidersWidget3),
  KTUtil.onDOMContentLoaded(function () {
    KTSlidersWidget3.init();
  });
var KTSlidersWidget7 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = function (e, t, a) {
      var l = document.querySelector(t);
      if (l && (!0 !== e.rendered || !l.classList.contains("initialized"))) {
        var r = parseInt(KTUtil.css(l, "height")),
          o = KTUtil.getCssVariableValue("--bs-danger"),
          i = {
            series: [a],
            chart: {
              fontFamily: "inherit",
              height: r,
              type: "radialBar",
              sparkline: { enabled: !0 },
            },
            plotOptions: {
              radialBar: {
                hollow: { margin: 0, size: "45%" },
                dataLabels: {
                  showOn: "always",
                  name: { show: !1 },
                  value: { show: !1 },
                },
                track: {
                  background: KTUtil.getCssVariableValue("--bs-white"),
                  strokeWidth: "100%",
                },
              },
            },
            colors: [o],
            stroke: { lineCap: "round" },
            labels: ["Progress"],
          };
        (e.self = new ApexCharts(l, i)),
          e.self.render(),
          (e.rendered = !0),
          l.classList.add("initialized");
      }
    };
  return {
    init: function () {
      l(e, "#kt_slider_widget_7_chart_1", 76);
      var r = document.querySelector("#kt_sliders_widget_7_slider");
      r &&
        (r.addEventListener("slid.bs.carousel", function (e) {
          1 === e.to && l(t, "#kt_slider_widget_7_chart_2", 55),
            2 === e.to && l(a, "#kt_slider_widget_7_chart_3", 25);
        }),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && (e.self.destroy(), (e.rendered = !1)),
            t.rendered && (t.self.destroy(), (t.rendered = !1)),
            a.rendered && (a.self.destroy(), (a.rendered = !1)),
            l(e, "#kt_slider_widget_7_chart_1", 76),
            l(t, "#kt_slider_widget_7_chart_2", 55),
            l(a, "#kt_slider_widget_7_chart_3", 25);
        }));
    },
  };
})();
"undefined" != typeof module && (module.exports = KTSlidersWidget7),
  KTUtil.onDOMContentLoaded(function () {
    KTSlidersWidget7.init();
  });
var KTTablesWidget14 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = { self: null, rendered: !1 },
    r = { self: null, rendered: !1 },
    o = function (e, t, a, l) {
      var r = document.querySelector(t);
      if (r) {
        var o = parseInt(KTUtil.css(r, "height")),
          i = r.getAttribute("data-kt-chart-color"),
          s = KTUtil.getCssVariableValue("--bs-gray-300"),
          n = KTUtil.getCssVariableValue("--bs-" + i),
          d = KTUtil.getCssVariableValue("--bs-body-bg"),
          m = {
            series: [{ name: "Net Profit", data: a }],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: o,
              toolbar: { show: !1 },
              zoom: { enabled: !1 },
              sparkline: { enabled: !0 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: { type: "solid", opacity: 1 },
            stroke: { curve: "smooth", show: !0, width: 2, colors: [n] },
            xaxis: {
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1 },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: { color: s, width: 1, dashArray: 3 },
              },
              tooltip: { enabled: !1 },
            },
            yaxis: { min: 0, max: 60, labels: { show: !1 } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: { enabled: !1 },
            colors: [d],
            markers: { colors: [d], strokeColor: [n], strokeWidth: 3 },
          };
        (e.self = new ApexCharts(r, m)),
          !0 === l &&
            setTimeout(function () {
              e.self.render(), (e.rendered = !0);
            }, 200);
      }
    };
  return {
    init: function () {
      var i = [7, 10, 5, 21, 6, 11, 5, 23, 5, 11, 18, 7, 21, 13];
      o(e, "#kt_table_widget_14_chart_1", i, !0);
      var s = [17, 5, 23, 2, 21, 9, 17, 23, 4, 24, 9, 17, 21, 7];
      o(t, "#kt_table_widget_14_chart_2", s, !0);
      var n = [2, 24, 5, 17, 7, 2, 12, 24, 5, 24, 2, 8, 12, 7];
      o(a, "#kt_table_widget_14_chart_3", n, !0);
      var d = [24, 3, 5, 19, 3, 7, 25, 14, 5, 14, 2, 8, 5, 17];
      o(l, "#kt_table_widget_14_chart_4", d, !0);
      var m = [3, 23, 1, 19, 3, 17, 3, 9, 25, 4, 2, 18, 25, 3];
      o(r, "#kt_table_widget_14_chart_5", m, !0),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(),
            t.rendered && t.self.destroy(),
            a.rendered && a.self.destroy(),
            l.rendered && l.self.destroy(),
            r.rendered && r.self.destroy(),
            o(e, "#kt_table_widget_14_chart_1", i, e.rendered),
            o(t, "#kt_table_widget_14_chart_2", s, t.rendered),
            o(a, "#kt_table_widget_14_chart_3", n, a.rendered),
            o(l, "#kt_table_widget_14_chart_4", d, l.rendered),
            o(r, "#kt_table_widget_14_chart_5", m, r.rendered);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTTablesWidget14),
  KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget14.init();
  });
var KTTablesWidget15 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = { self: null, rendered: !1 },
    r = { self: null, rendered: !1 },
    o = function (e, t, a, l) {
      var r = document.querySelector(t);
      if (r) {
        var o = parseInt(KTUtil.css(r, "height")),
          i = r.getAttribute("data-kt-chart-color"),
          s = KTUtil.getCssVariableValue("--bs-gray-300"),
          n = KTUtil.getCssVariableValue("--bs-" + i),
          d = KTUtil.getCssVariableValue("--bs-body-bg"),
          m = {
            series: [{ name: "Net Profit", data: a }],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: o,
              toolbar: { show: !1 },
              zoom: { enabled: !1 },
              sparkline: { enabled: !0 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: { type: "solid", opacity: 1 },
            stroke: { curve: "smooth", show: !0, width: 2, colors: [n] },
            xaxis: {
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1 },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: { color: s, width: 1, dashArray: 3 },
              },
              tooltip: { enabled: !1 },
            },
            yaxis: { min: 0, max: 60, labels: { show: !1, ontSize: "12px" } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: { enabled: !1 },
            colors: [d],
            markers: { colors: [d], strokeColor: [n], strokeWidth: 3 },
          };
        (e.self = new ApexCharts(r, m)),
          !0 === l &&
            setTimeout(function () {
              e.self.render(), (e.rendered = !0);
            }, 200);
      }
    };
  return {
    init: function () {
      var i = [7, 10, 5, 21, 6, 11, 5, 23, 5, 11, 18, 7, 21, 13];
      o(e, "#kt_table_widget_15_chart_1", i, !0);
      var s = [17, 5, 23, 2, 21, 9, 17, 23, 4, 24, 9, 17, 21, 7];
      o(t, "#kt_table_widget_15_chart_2", s, !0);
      var n = [2, 24, 5, 17, 7, 2, 12, 24, 5, 24, 2, 8, 12, 7];
      o(a, "#kt_table_widget_15_chart_3", n, !0);
      var d = [24, 3, 5, 19, 3, 7, 25, 14, 5, 14, 2, 8, 5, 17];
      o(l, "#kt_table_widget_15_chart_4", d, !0);
      var m = [3, 23, 1, 19, 3, 17, 3, 9, 25, 4, 2, 18, 25, 3];
      o(r, "#kt_table_widget_15_chart_5", m, !0),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(),
            t.rendered && t.self.destroy(),
            a.rendered && a.self.destroy(),
            l.rendered && l.self.destroy(),
            r.rendered && r.self.destroy(),
            o(e, "#kt_table_widget_15_chart_1", i, e.rendered),
            o(t, "#kt_table_widget_15_chart_2", s, t.rendered),
            o(a, "#kt_table_widget_15_chart_3", n, a.rendered),
            o(l, "#kt_table_widget_15_chart_4", d, l.rendered),
            o(r, "#kt_table_widget_15_chart_5", m, r.rendered);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTTablesWidget15),
  KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget15.init();
  });
var KTTablesWidget16 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = { self: null, rendered: !1 },
    r = { self: null, rendered: !1 },
    o = { self: null, rendered: !1 },
    i = { self: null, rendered: !1 },
    s = { self: null, rendered: !1 },
    n = { self: null, rendered: !1 },
    d = { self: null, rendered: !1 },
    m = { self: null, rendered: !1 },
    c = { self: null, rendered: !1 },
    g = { self: null, rendered: !1 },
    f = { self: null, rendered: !1 },
    u = { self: null, rendered: !1 },
    p = { self: null, rendered: !1 },
    h = { self: null, rendered: !1 },
    y = { self: null, rendered: !1 },
    _ = { self: null, rendered: !1 },
    b = { self: null, rendered: !1 },
    v = function (e, t, a, l, r) {
      var o = document.querySelector(a);
      if (o) {
        var i = parseInt(KTUtil.css(o, "height")),
          s = o.getAttribute("data-kt-chart-color"),
          n =
            (KTUtil.getCssVariableValue("--bs-gray-800"),
            KTUtil.getCssVariableValue("--bs-gray-300")),
          d = KTUtil.getCssVariableValue("--bs-" + s),
          m = KTUtil.getCssVariableValue("--bs-body-bg"),
          c = {
            series: [{ name: "Net Profit", data: l }],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: i,
              toolbar: { show: !1 },
              zoom: { enabled: !1 },
              sparkline: { enabled: !0 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: { type: "solid", opacity: 1 },
            stroke: { curve: "smooth", show: !0, width: 2, colors: [d] },
            xaxis: {
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1 },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: { color: n, width: 1, dashArray: 3 },
              },
              tooltip: { enabled: !1 },
            },
            yaxis: { min: 0, max: 60, labels: { show: !1, ontSize: "12px" } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: { enabled: !1 },
            colors: [m],
            markers: { colors: [m], strokeColor: [d], strokeWidth: 3 },
          };
        e.self = new ApexCharts(o, c);
        var g = document.querySelector(t);
        !0 === r &&
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200),
          g.addEventListener("shown.bs.tab", function (t) {
            !1 === e.rendered && (e.self.render(), (e.rendered = !0));
          });
      }
    };
  return {
    init: function () {
      var w = [16, 10, 15, 21, 6, 11, 5, 23, 5, 11, 18, 7, 21, 13];
      v(
        e,
        "#kt_stats_widget_16_tab_link_1",
        "#kt_table_widget_16_chart_1_1",
        w,
        !0
      );
      var T = [8, 5, 16, 3, 23, 16, 11, 15, 3, 11, 15, 7, 17, 9];
      v(
        t,
        "#kt_stats_widget_16_tab_link_1",
        "#kt_table_widget_16_chart_1_2",
        T,
        !0
      );
      var k = [8, 6, 16, 3, 23, 16, 11, 14, 3, 11, 15, 8, 17, 9];
      v(
        a,
        "#kt_stats_widget_16_tab_link_1",
        "#kt_table_widget_16_chart_1_3",
        k,
        !0
      );
      var x = [12, 5, 23, 12, 21, 9, 17, 20, 4, 24, 9, 13, 18, 9];
      v(
        l,
        "#kt_stats_widget_16_tab_link_1",
        "#kt_table_widget_16_chart_1_4",
        x,
        !0
      );
      var A = [13, 10, 15, 21, 6, 11, 5, 21, 5, 12, 18, 7, 21, 13];
      v(
        r,
        "#kt_stats_widget_16_tab_link_2",
        "#kt_table_widget_16_chart_2_1",
        A,
        !1
      );
      var C = [13, 5, 21, 12, 21, 9, 17, 20, 4, 23, 9, 17, 21, 7];
      v(
        o,
        "#kt_stats_widget_16_tab_link_2",
        "#kt_table_widget_16_chart_2_2",
        C,
        !1
      );
      var K = [8, 10, 14, 21, 6, 31, 5, 21, 5, 11, 15, 7, 23, 13];
      v(
        i,
        "#kt_stats_widget_16_tab_link_2",
        "#kt_table_widget_16_chart_2_3",
        K,
        !1
      );
      var V = [6, 10, 12, 21, 6, 11, 7, 23, 5, 12, 18, 7, 21, 15];
      v(
        s,
        "#kt_stats_widget_16_tab_link_2",
        "#kt_table_widget_16_chart_2_4",
        V,
        !1
      );
      var S = [7, 10, 5, 21, 6, 11, 5, 23, 5, 11, 18, 7, 21, 13];
      v(
        n,
        "#kt_stats_widget_16_tab_link_3",
        "#kt_table_widget_16_chart_3_1",
        S,
        !1
      );
      var U = [8, 5, 16, 2, 19, 9, 17, 21, 4, 24, 4, 13, 21, 5];
      v(
        d,
        "#kt_stats_widget_16_tab_link_3",
        "#kt_table_widget_16_chart_3_2",
        U,
        !1
      );
      var M = [15, 10, 12, 21, 6, 11, 23, 11, 5, 12, 18, 7, 21, 15];
      v(
        m,
        "#kt_stats_widget_16_tab_link_3",
        "#kt_table_widget_16_chart_3_3",
        M,
        !1
      );
      var W = [3, 9, 12, 23, 6, 11, 7, 23, 5, 12, 14, 7, 21, 8];
      v(
        c,
        "#kt_stats_widget_16_tab_link_3",
        "#kt_table_widget_16_chart_3_4",
        W,
        !1
      );
      var L = [9, 14, 15, 21, 8, 11, 5, 23, 5, 11, 18, 5, 23, 8];
      v(
        g,
        "#kt_stats_widget_16_tab_link_4",
        "#kt_table_widget_16_chart_4_1",
        L,
        !1
      );
      var z = [7, 5, 23, 12, 21, 9, 17, 15, 4, 24, 9, 17, 21, 7];
      v(
        f,
        "#kt_stats_widget_16_tab_link_4",
        "#kt_table_widget_16_chart_4_2",
        z,
        !1
      );
      var D = [8, 10, 14, 21, 6, 31, 8, 23, 5, 3, 14, 7, 21, 12];
      v(
        u,
        "#kt_stats_widget_16_tab_link_4",
        "#kt_table_widget_16_chart_4_3",
        D,
        !1
      );
      var O = [6, 12, 12, 19, 6, 11, 7, 23, 5, 12, 18, 7, 21, 15];
      v(
        p,
        "#kt_stats_widget_16_tab_link_4",
        "#kt_table_widget_16_chart_4_4",
        O,
        !1
      );
      var F = [5, 10, 15, 21, 6, 11, 5, 23, 5, 11, 17, 7, 21, 13];
      v(
        h,
        "#kt_stats_widget_16_tab_link_5",
        "#kt_table_widget_16_chart_5_1",
        F,
        !1
      );
      var I = [4, 5, 23, 12, 21, 9, 17, 15, 4, 24, 9, 17, 21, 7];
      v(
        y,
        "#kt_stats_widget_16_tab_link_5",
        "#kt_table_widget_16_chart_5_2",
        I,
        !1
      );
      var P = [7, 10, 14, 21, 6, 31, 5, 23, 5, 11, 15, 7, 21, 17];
      v(
        _,
        "#kt_stats_widget_16_tab_link_5",
        "#kt_table_widget_16_chart_5_3",
        P,
        !1
      );
      var R = [3, 10, 12, 23, 6, 11, 7, 22, 5, 12, 18, 7, 21, 14];
      v(
        b,
        "#kt_stats_widget_16_tab_link_5",
        "#kt_table_widget_16_chart_5_4",
        R,
        !1
      ),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(),
            t.rendered && t.self.destroy(),
            a.rendered && a.self.destroy(),
            l.rendered && l.self.destroy(),
            r.rendered && r.self.destroy(),
            o.rendered && o.self.destroy(),
            i.rendered && i.self.destroy(),
            s.rendered && s.self.destroy(),
            n.rendered && n.self.destroy(),
            d.rendered && d.self.destroy(),
            m.rendered && m.self.destroy(),
            c.rendered && c.self.destroy(),
            g.rendered && g.self.destroy(),
            f.rendered && f.self.destroy(),
            u.rendered && u.self.destroy(),
            p.rendered && p.self.destroy(),
            h.rendered && h.self.destroy(),
            y.rendered && y.self.destroy(),
            _.rendered && _.self.destroy(),
            b.rendered && b.self.destroy(),
            v(
              e,
              "#kt_stats_widget_16_tab_link_1",
              "#kt_table_widget_16_chart_1_1",
              w,
              e.rendered
            ),
            v(
              t,
              "#kt_stats_widget_16_tab_link_1",
              "#kt_table_widget_16_chart_1_2",
              T,
              t.rendered
            ),
            v(
              a,
              "#kt_stats_widget_16_tab_link_1",
              "#kt_table_widget_16_chart_1_3",
              k,
              a.rendered
            ),
            v(
              l,
              "#kt_stats_widget_16_tab_link_1",
              "#kt_table_widget_16_chart_1_4",
              x,
              l.rendered
            ),
            v(
              r,
              "#kt_stats_widget_16_tab_link_2",
              "#kt_table_widget_16_chart_2_1",
              A,
              r.rendered
            ),
            v(
              o,
              "#kt_stats_widget_16_tab_link_2",
              "#kt_table_widget_16_chart_2_2",
              C,
              o.rendered
            ),
            v(
              i,
              "#kt_stats_widget_16_tab_link_2",
              "#kt_table_widget_16_chart_2_3",
              K,
              i.rendered
            ),
            v(
              s,
              "#kt_stats_widget_16_tab_link_2",
              "#kt_table_widget_16_chart_2_4",
              V,
              s.rendered
            ),
            v(
              n,
              "#kt_stats_widget_16_tab_link_3",
              "#kt_table_widget_16_chart_3_1",
              S,
              n.rendered
            ),
            v(
              d,
              "#kt_stats_widget_16_tab_link_3",
              "#kt_table_widget_16_chart_3_2",
              U,
              d.rendered
            ),
            v(
              m,
              "#kt_stats_widget_16_tab_link_3",
              "#kt_table_widget_16_chart_3_3",
              M,
              m.rendered
            ),
            v(
              c,
              "#kt_stats_widget_16_tab_link_3",
              "#kt_table_widget_16_chart_3_4",
              W,
              c.rendered
            ),
            v(
              g,
              "#kt_stats_widget_16_tab_link_4",
              "#kt_table_widget_16_chart_4_1",
              L,
              g.rendered
            ),
            v(
              f,
              "#kt_stats_widget_16_tab_link_4",
              "#kt_table_widget_16_chart_4_2",
              z,
              f.rendered
            ),
            v(
              u,
              "#kt_stats_widget_16_tab_link_4",
              "#kt_table_widget_16_chart_4_3",
              D,
              u.rendered
            ),
            v(
              p,
              "#kt_stats_widget_16_tab_link_4",
              "#kt_table_widget_16_chart_4_4",
              O,
              p.rendered
            ),
            v(
              h,
              "#kt_stats_widget_16_tab_link_5",
              "#kt_table_widget_16_chart_5_1",
              F,
              h.rendered
            ),
            v(
              y,
              "#kt_stats_widget_16_tab_link_5",
              "#kt_table_widget_16_chart_5_2",
              I,
              y.rendered
            ),
            v(
              _,
              "#kt_stats_widget_16_tab_link_5",
              "#kt_table_widget_16_chart_5_3",
              P,
              _.rendered
            ),
            v(
              b,
              "#kt_stats_widget_16_tab_link_5",
              "#kt_table_widget_16_chart_5_4",
              R,
              b.rendered
            );
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTTablesWidget16),
  KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget16.init();
  });
var KTTablesWidget3 = (function () {
  var e, t;
  const a = () => {
    const e = document.querySelector(
      '[data-kt-table-widget-3="filter_status"]'
    );
    $(e).on("select2:select", function (e) {
      const a = $(this).val();
      "Show All" === a ? t.search("").draw() : t.search(a).draw();
    });
  };
  return {
    init: function () {
      (e = document.querySelector("#kt_widget_table_3")) &&
        ((t = $(e).DataTable({
          info: !1,
          order: [],
          paging: !1,
          pageLength: !1,
        })),
        (() => {
          const e = document
              .querySelector('[data-kt-table-widget-3="tabs_nav"]')
              .querySelectorAll('[data-kt-table-widget-3="tab"]'),
            a = ["border-bottom", "border-3", "border-primary"];
          e.forEach((l) => {
            l.addEventListener("click", (r) => {
              const o = l.getAttribute("data-kt-table-widget-3-value");
              e.forEach((e) => {
                e.classList.remove(...a), e.classList.add("text-muted");
              }),
                l.classList.remove("text-muted"),
                l.classList.add(...a),
                "Show All" === o ? t.search("").draw() : t.search(o).draw();
            });
          });
        })(),
        a());
    },
  };
})();
"undefined" != typeof module && (module.exports = KTTablesWidget3),
  KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget3.init();
  });
var KTTablesWidget4 = (function () {
  var e, t, a;
  const l = () => {
      const e = document.querySelector(
        '[data-kt-table-widget-4="filter_status"]'
      );
      $(e).on("select2:select", function (e) {
        const a = $(this).val();
        "Show All" === a ? t.search("").draw() : t.search(a).draw();
      });
    },
    r = [
      {
        image: "76",
        name: "Go Pro 8",
        description: "Latest  version of Go Pro.",
        cost: "500.00",
        qty: "1",
        total: "500.00",
        stock: "12",
      },
      {
        image: "60",
        name: "Bose Earbuds",
        description: "Top quality earbuds from Bose.",
        cost: "300.00",
        qty: "1",
        total: "300.00",
        stock: "8",
      },
      {
        image: "211",
        name: "Dry-fit Sports T-shirt",
        description: "Comfortable sportswear.",
        cost: "89.00",
        qty: "1",
        total: "89.00",
        stock: "18",
      },
      {
        image: "21",
        name: "Apple Airpod 3",
        description: "Apple's latest earbuds.",
        cost: "200.00",
        qty: "2",
        total: "400.00",
        stock: "32",
      },
      {
        image: "83",
        name: "Nike Pumps",
        description: "Apple's latest headphones.",
        cost: "200.00",
        qty: "1",
        total: "200.00",
        stock: "8",
      },
    ],
    o = () => {
      const e = document.querySelectorAll(
          '[data-kt-table-widget-4="expand_row"]'
        ),
        t = [3, 1, 3, 1, 2, 1];
      e.forEach((e, a) => {
        e.addEventListener("click", (l) => {
          l.stopImmediatePropagation(), l.preventDefault();
          const o = e.closest("tr"),
            s = ["isOpen", "border-bottom-0"],
            n = [];
          for (var d = 0; d < t[a]; d++) n.push(r[d]);
          if (o.classList.contains("isOpen")) {
            for (
              ;
              o.nextSibling &&
              "subtable_template" ===
                o.nextSibling.getAttribute("data-kt-table-widget-4");

            )
              o.nextSibling.parentNode.removeChild(o.nextSibling);
            o.classList.remove(...s), e.classList.remove("active");
          } else i(n, o), o.classList.add(...s), e.classList.add("active");
        });
      });
    },
    i = (t, l) => {
      t.forEach((r, o) => {
        const i = a.cloneNode(!0),
          s = i.querySelector('[data-kt-table-widget-4="template_image"]'),
          n = i.querySelector('[data-kt-table-widget-4="template_name"]'),
          d = i.querySelector(
            '[data-kt-table-widget-4="template_description"]'
          ),
          m = i.querySelector('[data-kt-table-widget-4="template_cost"]'),
          c = i.querySelector('[data-kt-table-widget-4="template_qty"]'),
          g = i.querySelector('[data-kt-table-widget-4="template_total"]'),
          f = i.querySelector('[data-kt-table-widget-4="template_stock"]'),
          u = s.getAttribute("data-kt-src-path");
        s.setAttribute("src", u + r.image + ".png"),
          (n.innerText = r.name),
          (d.innerText = r.description),
          (m.innerText = r.cost),
          (c.innerText = r.qty),
          (g.innerText = r.total),
          r.stock > 10
            ? (f.innerHTML =
                '<div class="badge badge-light-success">In Stock</div>')
            : (f.innerHTML =
                '<div class="badge badge-light-warning">Low Stock</div>'),
          1 === t.length || t.length;
        e.querySelector("tbody").insertBefore(i, l.nextSibling);
      });
    },
    s = () => {
      document
        .querySelectorAll('[data-kt-table-widget-4="subtable_template"]')
        .forEach((e) => {
          e.parentNode.removeChild(e);
        });
      e.querySelectorAll("tbody tr").forEach((e) => {
        e.classList.remove("isOpen"),
          e.querySelector('[data-kt-table-widget-4="expand_row"]') &&
            e
              .querySelector('[data-kt-table-widget-4="expand_row"]')
              .classList.remove("active");
      });
    };
  return {
    init: function () {
      (e = document.querySelector("#kt_table_widget_4_table")) &&
        ((() => {
          const l = document.querySelector(
            '[data-kt-table-widget-4="subtable_template"]'
          );
          (a = l.cloneNode(!0)).classList.remove("d-none"),
            l.parentNode.removeChild(l),
            (t = $(e).DataTable({
              info: !1,
              order: [],
              lengthChange: !1,
              pageLength: 6,
              ordering: !1,
              paging: !1,
              columnDefs: [
                { orderable: !1, targets: 0 },
                { orderable: !1, targets: 6 },
              ],
            })).on("draw", function () {
              s(), o();
            });
        })(),
        document
          .querySelector('[data-kt-table-widget-4="search"]')
          .addEventListener("keyup", function (e) {
            t.search(e.target.value).draw();
          }),
        l(),
        o());
    },
  };
})();
"undefined" != typeof module && (module.exports = KTTablesWidget4),
  KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget4.init();
  });
var KTTablesWidget5 = (function () {
  var e, t;
  const a = () => {
    const e = document.querySelector(
      '[data-kt-table-widget-5="filter_status"]'
    );
    $(e).on("select2:select", function (e) {
      const a = $(this).val();
      "Show All" === a ? t.search("").draw() : t.search(a).draw();
    });
  };
  return {
    init: function () {
      (e = document.querySelector("#kt_table_widget_5_table")) &&
        (e.querySelectorAll("tbody tr").forEach((e) => {
          const t = e.querySelectorAll("td"),
            a = moment(t[2].innerHTML, "MMM DD, YYYY").format();
          t[2].setAttribute("data-order", a);
        }),
        (t = $(e).DataTable({
          info: !1,
          order: [],
          lengthChange: !1,
          pageLength: 6,
          paging: !1,
          columnDefs: [{ orderable: !1, targets: 1 }],
        })),
        a());
    },
  };
})();
"undefined" != typeof module && (module.exports = KTTablesWidget5),
  KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget5.init();
  });
var KTTimelineWidget1 = (function () {
  const e = () => {
      document
        .querySelectorAll('[data-kt-timeline-widget-1="tab"]')
        .forEach((e) => {
          e.addEventListener("shown.bs.tab", (a) => {
            "#kt_timeline_widget_1_tab_week" === e.getAttribute("href") &&
              (() => {
                const e = document.querySelector("#kt_timeline_widget_1_2");
                if (!e) return;
                if (e.innerHTML) return;
                var a = Date.now(),
                  l = e.getAttribute("data-kt-timeline-widget-1-image-root"),
                  r = new vis.DataSet([
                    { id: 1, content: "Research", order: 1 },
                    { id: 2, content: "Phase 2.6 QA", order: 2 },
                    { id: 3, content: "UI Design", order: 3 },
                    { id: 4, content: "Development", order: 4 },
                  ]),
                  o = new vis.DataSet([
                    {
                      id: 1,
                      group: 1,
                      start: a,
                      end: moment(a).add(7, "days"),
                      content: "Framework",
                      progress: "71%",
                      color: "primary",
                      users: ["avatars/300-6.jpg", "avatars/300-1.jpg"],
                    },
                    {
                      id: 2,
                      group: 2,
                      start: moment(a).add(7, "days"),
                      end: moment(a).add(14, "days"),
                      content: "Accessibility",
                      progress: "84%",
                      color: "success",
                      users: ["avatars/300-2.jpg"],
                    },
                    {
                      id: 3,
                      group: 3,
                      start: moment(a).add(3, "days"),
                      end: moment(a).add(20, "days"),
                      content: "Microsites",
                      progress: "69%",
                      color: "danger",
                      users: ["avatars/300-5.jpg", "avatars/300-20.jpg"],
                    },
                    {
                      id: 4,
                      group: 4,
                      start: moment(a).add(10, "days"),
                      end: moment(a).add(21, "days"),
                      content: "Deployment",
                      progress: "74%",
                      color: "info",
                      users: [
                        "avatars/300-23.jpg",
                        "avatars/300-12.jpg",
                        "avatars/300-9.jpg",
                      ],
                    },
                  ]),
                  i = {
                    zoomable: !1,
                    moveable: !1,
                    selectable: !1,
                    margin: { item: { horizontal: 10, vertical: 35 } },
                    showCurrentTime: !1,
                    xss: {
                      disabled: !1,
                      filterOptions: {
                        whiteList: {
                          div: ["class", "style"],
                          img: ["data-kt-timeline-avatar-src", "alt"],
                          a: ["href", "class"],
                        },
                      },
                    },
                    template: function (e) {
                      const t = e.users;
                      let a = "";
                      return (
                        t.forEach((e) => {
                          a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${
                            l + e
                          }" alt="" /></div>`;
                        }),
                        `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `
                      );
                    },
                    onInitialDrawComplete: function () {
                      t();
                      const a = e.closest(
                          '[data-kt-timeline-widget-1-blockui="true"]'
                        ),
                        l = KTBlockUI.getInstance(a);
                      l.isBlocked() &&
                        setTimeout(() => {
                          l.release();
                        }, 1e3);
                    },
                  };
                const s = new vis.Timeline(e, o, r, i);
                s.on("currentTimeTick", () => {
                  s.off("currentTimeTick");
                });
              })(),
              "#kt_timeline_widget_1_tab_month" === e.getAttribute("href") &&
                (() => {
                  const e = document.querySelector("#kt_timeline_widget_1_3");
                  if (!e) return;
                  if (e.innerHTML) return;
                  var a = Date.now(),
                    l = e.getAttribute("data-kt-timeline-widget-1-image-root"),
                    r = new vis.DataSet([
                      { id: "research", content: "Research", order: 1 },
                      { id: "qa", content: "Phase 2.6 QA", order: 2 },
                      { id: "ui", content: "UI Design", order: 3 },
                      { id: "dev", content: "Development", order: 4 },
                    ]),
                    o = new vis.DataSet([
                      {
                        id: 1,
                        group: "research",
                        start: a,
                        end: moment(a).add(2, "months"),
                        content: "Tags",
                        progress: "79%",
                        color: "primary",
                        users: ["avatars/300-6.jpg", "avatars/300-1.jpg"],
                      },
                      {
                        id: 2,
                        group: "qa",
                        start: moment(a).add(0.5, "months"),
                        end: moment(a).add(5, "months"),
                        content: "Testing",
                        progress: "64%",
                        color: "success",
                        users: ["avatars/300-2.jpg"],
                      },
                      {
                        id: 3,
                        group: "ui",
                        start: moment(a).add(2, "months"),
                        end: moment(a).add(6.5, "months"),
                        content: "Media",
                        progress: "82%",
                        color: "danger",
                        users: ["avatars/300-5.jpg", "avatars/300-20.jpg"],
                      },
                      {
                        id: 4,
                        group: "dev",
                        start: moment(a).add(4, "months"),
                        end: moment(a).add(7, "months"),
                        content: "Plugins",
                        progress: "58%",
                        color: "info",
                        users: [
                          "avatars/300-23.jpg",
                          "avatars/300-12.jpg",
                          "avatars/300-9.jpg",
                        ],
                      },
                    ]),
                    i = {
                      zoomable: !1,
                      moveable: !1,
                      selectable: !1,
                      margin: { item: { horizontal: 10, vertical: 35 } },
                      showCurrentTime: !1,
                      xss: {
                        disabled: !1,
                        filterOptions: {
                          whiteList: {
                            div: ["class", "style"],
                            img: ["data-kt-timeline-avatar-src", "alt"],
                            a: ["href", "class"],
                          },
                        },
                      },
                      template: function (e) {
                        const t = e.users;
                        let a = "";
                        return (
                          t.forEach((e) => {
                            a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${
                              l + e
                            }" alt="" /></div>`;
                          }),
                          `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `
                        );
                      },
                      onInitialDrawComplete: function () {
                        t();
                        const a = e.closest(
                            '[data-kt-timeline-widget-1-blockui="true"]'
                          ),
                          l = KTBlockUI.getInstance(a);
                        l.isBlocked() &&
                          setTimeout(() => {
                            l.release();
                          }, 1e3);
                      },
                    };
                  const s = new vis.Timeline(e, o, r, i);
                  s.on("currentTimeTick", () => {
                    s.off("currentTimeTick");
                  });
                })();
          });
        });
    },
    t = () => {
      const e = document.querySelectorAll("[data-kt-timeline-avatar-src]");
      e &&
        e.forEach((e) => {
          e.setAttribute("src", e.getAttribute("data-kt-timeline-avatar-src")),
            e.removeAttribute("data-kt-timeline-avatar-src");
        });
    };
  return {
    init: function () {
      (() => {
        const e = document.querySelector("#kt_timeline_widget_1_1");
        if (!e) return;
        if (e.innerHTML) return;
        var a = Date.now(),
          l = e.getAttribute("data-kt-timeline-widget-1-image-root"),
          r = new vis.DataSet([
            { id: "research", content: "Research", order: 1 },
            { id: "qa", content: "Phase 2.6 QA", order: 2 },
            { id: "ui", content: "UI Design", order: 3 },
            { id: "dev", content: "Development", order: 4 },
          ]),
          o = new vis.DataSet([
            {
              id: 1,
              group: "research",
              start: a,
              end: moment(a).add(1.5, "hours"),
              content: "Meeting",
              progress: "60%",
              color: "primary",
              users: ["avatars/300-6.jpg", "avatars/300-1.jpg"],
            },
            {
              id: 2,
              group: "qa",
              start: moment(a).add(1, "hours"),
              end: moment(a).add(2, "hours"),
              content: "Testing",
              progress: "47%",
              color: "success",
              users: ["avatars/300-2.jpg"],
            },
            {
              id: 3,
              group: "ui",
              start: moment(a).add(30, "minutes"),
              end: moment(a).add(2.5, "hours"),
              content: "Landing page",
              progress: "55%",
              color: "danger",
              users: ["avatars/300-5.jpg", "avatars/300-20.jpg"],
            },
            {
              id: 4,
              group: "dev",
              start: moment(a).add(1.5, "hours"),
              end: moment(a).add(3, "hours"),
              content: "Products module",
              progress: "75%",
              color: "info",
              users: [
                "avatars/300-23.jpg",
                "avatars/300-12.jpg",
                "avatars/300-9.jpg",
              ],
            },
          ]),
          i = {
            zoomable: !1,
            moveable: !1,
            selectable: !1,
            margin: { item: { horizontal: 10, vertical: 35 } },
            showCurrentTime: !1,
            xss: {
              disabled: !1,
              filterOptions: {
                whiteList: {
                  div: ["class", "style"],
                  img: ["data-kt-timeline-avatar-src", "alt"],
                  a: ["href", "class"],
                },
              },
            },
            template: function (e) {
              const t = e.users;
              let a = "";
              return (
                t.forEach((e) => {
                  a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${
                    l + e
                  }" alt="" /></div>`;
                }),
                `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `
              );
            },
            onInitialDrawComplete: function () {
              t();
              const a = e.closest('[data-kt-timeline-widget-1-blockui="true"]'),
                l = KTBlockUI.getInstance(a);
              l.isBlocked() &&
                setTimeout(() => {
                  l.release();
                }, 1e3);
            },
          };
        const s = new vis.Timeline(e, o, r, i);
        s.on("currentTimeTick", () => {
          s.off("currentTimeTick");
        });
      })(),
        document
          .querySelectorAll('[data-kt-timeline-widget-1-blockui="true"]')
          .forEach((e) => {
            new KTBlockUI(e, { overlayClass: "bg-body" }).block();
          }),
        e();
    },
  };
})();
"undefined" != typeof module && (module.exports = KTTimelineWidget1),
  KTUtil.onDOMContentLoaded(function () {
    KTTimelineWidget1.init();
  });
var KTTimelineWidget2 = {
  init: function () {
    var e;
    (e = document.querySelector("#kt_timeline_widget_2_card")) &&
      KTUtil.on(e, '[data-kt-element="checkbox"]', "change", function (e) {
        var t = this.closest(".form-check"),
          a = this.closest("tr"),
          l = a.querySelector('[data-kt-element="bullet"]'),
          r = a.querySelector('[data-kt-element="status"]');
        !0 === this.checked
          ? (t.classList.add("form-check-success"),
            l.classList.remove("bg-primary"),
            l.classList.add("bg-success"),
            (r.innerText = "Done"),
            r.classList.remove("badge-light-primary"),
            r.classList.add("badge-light-success"))
          : (t.classList.remove("form-check-success"),
            l.classList.remove("bg-success"),
            l.classList.add("bg-primary"),
            (r.innerText = "In Process"),
            r.classList.remove("badge-light-success"),
            r.classList.add("badge-light-primary"));
      });
  },
};
"undefined" != typeof module && (module.exports = KTTimelineWidget2),
  KTUtil.onDOMContentLoaded(function () {
    KTTimelineWidget2.init();
  });
var KTTimelineWidget4 = (function () {
  const e = () => {
      document
        .querySelectorAll('[data-kt-timeline-widget-4="tab"]')
        .forEach((e) => {
          e.addEventListener("shown.bs.tab", (a) => {
            "#kt_timeline_widget_4_tab_week" === e.getAttribute("href") &&
              (() => {
                const e = document.querySelector("#kt_timeline_widget_4_2");
                if (!e) return;
                if (e.innerHTML) return;
                var a = Date.now(),
                  l = e.getAttribute("data-kt-timeline-widget-4-image-root"),
                  r = new vis.DataSet([
                    { id: 1, content: "Research", order: 1 },
                    { id: 2, content: "Phase 2.6 QA", order: 2 },
                    { id: 3, content: "UI Design", order: 3 },
                    { id: 4, content: "Development", order: 4 },
                  ]),
                  o = new vis.DataSet([
                    {
                      id: 1,
                      group: 1,
                      start: a,
                      end: moment(a).add(7, "days"),
                      content: "Framework",
                      progress: "71%",
                      color: "primary",
                      users: ["avatars/300-6.jpg", "avatars/300-1.jpg"],
                    },
                    {
                      id: 2,
                      group: 2,
                      start: moment(a).add(7, "days"),
                      end: moment(a).add(14, "days"),
                      content: "Accessibility",
                      progress: "84%",
                      color: "success",
                      users: ["avatars/300-2.jpg"],
                    },
                    {
                      id: 3,
                      group: 3,
                      start: moment(a).add(3, "days"),
                      end: moment(a).add(20, "days"),
                      content: "Microsites",
                      progress: "69%",
                      color: "danger",
                      users: ["avatars/300-5.jpg", "avatars/300-20.jpg"],
                    },
                    {
                      id: 4,
                      group: 4,
                      start: moment(a).add(10, "days"),
                      end: moment(a).add(21, "days"),
                      content: "Deployment",
                      progress: "74%",
                      color: "info",
                      users: [
                        "avatars/300-23.jpg",
                        "avatars/300-12.jpg",
                        "avatars/300-9.jpg",
                      ],
                    },
                  ]),
                  i = {
                    zoomable: !1,
                    moveable: !1,
                    selectable: !1,
                    margin: { item: { horizontal: 10, vertical: 35 } },
                    showCurrentTime: !1,
                    xss: {
                      disabled: !1,
                      filterOptions: {
                        whiteList: {
                          div: ["class", "style"],
                          img: ["data-kt-timeline-avatar-src", "alt"],
                          a: ["href", "class"],
                        },
                      },
                    },
                    template: function (e) {
                      const t = e.users;
                      let a = "";
                      return (
                        t.forEach((e) => {
                          a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${
                            l + e
                          }" alt="" /></div>`;
                        }),
                        `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `
                      );
                    },
                    onInitialDrawComplete: function () {
                      t();
                      const a = e.closest(
                          '[data-kt-timeline-widget-4-blockui="true"]'
                        ),
                        l = KTBlockUI.getInstance(a);
                      l.isBlocked() &&
                        setTimeout(() => {
                          l.release();
                        }, 1e3);
                    },
                  };
                const s = new vis.Timeline(e, o, r, i);
                s.on("currentTimeTick", () => {
                  s.off("currentTimeTick");
                });
              })(),
              "#kt_timeline_widget_4_tab_month" === e.getAttribute("href") &&
                (() => {
                  const e = document.querySelector("#kt_timeline_widget_4_3");
                  if (!e) return;
                  if (e.innerHTML) return;
                  var a = Date.now(),
                    l = e.getAttribute("data-kt-timeline-widget-4-image-root"),
                    r = new vis.DataSet([
                      { id: "research", content: "Research", order: 1 },
                      { id: "qa", content: "Phase 2.6 QA", order: 2 },
                      { id: "ui", content: "UI Design", order: 3 },
                      { id: "dev", content: "Development", order: 4 },
                    ]),
                    o = new vis.DataSet([
                      {
                        id: 1,
                        group: "research",
                        start: a,
                        end: moment(a).add(2, "months"),
                        content: "Tags",
                        progress: "79%",
                        color: "primary",
                        users: ["avatars/300-6.jpg", "avatars/300-1.jpg"],
                      },
                      {
                        id: 2,
                        group: "qa",
                        start: moment(a).add(0.5, "months"),
                        end: moment(a).add(5, "months"),
                        content: "Testing",
                        progress: "64%",
                        color: "success",
                        users: ["avatars/300-2.jpg"],
                      },
                      {
                        id: 3,
                        group: "ui",
                        start: moment(a).add(2, "months"),
                        end: moment(a).add(6.5, "months"),
                        content: "Media",
                        progress: "82%",
                        color: "danger",
                        users: ["avatars/300-5.jpg", "avatars/300-20.jpg"],
                      },
                      {
                        id: 4,
                        group: "dev",
                        start: moment(a).add(4, "months"),
                        end: moment(a).add(7, "months"),
                        content: "Plugins",
                        progress: "58%",
                        color: "info",
                        users: [
                          "avatars/300-23.jpg",
                          "avatars/300-12.jpg",
                          "avatars/300-9.jpg",
                        ],
                      },
                    ]),
                    i = {
                      zoomable: !1,
                      moveable: !1,
                      selectable: !1,
                      margin: { item: { horizontal: 10, vertical: 35 } },
                      showCurrentTime: !1,
                      xss: {
                        disabled: !1,
                        filterOptions: {
                          whiteList: {
                            div: ["class", "style"],
                            img: ["data-kt-timeline-avatar-src", "alt"],
                            a: ["href", "class"],
                          },
                        },
                      },
                      template: function (e) {
                        const t = e.users;
                        let a = "";
                        return (
                          t.forEach((e) => {
                            a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${
                              l + e
                            }" alt="" /></div>`;
                          }),
                          `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `
                        );
                      },
                      onInitialDrawComplete: function () {
                        t();
                        const a = e.closest(
                            '[data-kt-timeline-widget-4-blockui="true"]'
                          ),
                          l = KTBlockUI.getInstance(a);
                        l.isBlocked() &&
                          setTimeout(() => {
                            l.release();
                          }, 1e3);
                      },
                    };
                  const s = new vis.Timeline(e, o, r, i);
                  s.on("currentTimeTick", () => {
                    s.off("currentTimeTick");
                  });
                })(),
              "#kt_timeline_widget_4_tab_2022" === e.getAttribute("href") &&
                (() => {
                  const e = document.querySelector("#kt_timeline_widget_4_4");
                  if (!e) return;
                  if (e.innerHTML) return;
                  var a = Date.now(),
                    l = e.getAttribute("data-kt-timeline-widget-4-image-root"),
                    r = new vis.DataSet([
                      { id: "research", content: "Research", order: 1 },
                      { id: "qa", content: "Phase 2.6 QA", order: 2 },
                      { id: "ui", content: "UI Design", order: 3 },
                      { id: "dev", content: "Development", order: 4 },
                    ]),
                    o = new vis.DataSet([
                      {
                        id: 1,
                        group: "research",
                        start: a,
                        end: moment(a).add(2, "months"),
                        content: "Tags",
                        progress: "51%",
                        color: "primary",
                        users: ["avatars/300-7.jpg", "avatars/300-2.jpg"],
                      },
                      {
                        id: 2,
                        group: "qa",
                        start: moment(a).add(0.5, "months"),
                        end: moment(a).add(5, "months"),
                        content: "Testing",
                        progress: "64%",
                        color: "success",
                        users: ["avatars/300-2.jpg"],
                      },
                      {
                        id: 3,
                        group: "ui",
                        start: moment(a).add(2, "months"),
                        end: moment(a).add(6.5, "months"),
                        content: "Media",
                        progress: "54%",
                        color: "danger",
                        users: ["avatars/300-5.jpg", "avatars/300-21.jpg"],
                      },
                      {
                        id: 4,
                        group: "dev",
                        start: moment(a).add(4, "months"),
                        end: moment(a).add(7, "months"),
                        content: "Plugins",
                        progress: "348%",
                        color: "info",
                        users: [
                          "avatars/300-3.jpg",
                          "avatars/300-11.jpg",
                          "avatars/300-13.jpg",
                        ],
                      },
                    ]),
                    i = {
                      zoomable: !1,
                      moveable: !1,
                      selectable: !1,
                      margin: { item: { horizontal: 10, vertical: 35 } },
                      showCurrentTime: !1,
                      xss: {
                        disabled: !1,
                        filterOptions: {
                          whiteList: {
                            div: ["class", "style"],
                            img: ["data-kt-timeline-avatar-src", "alt"],
                            a: ["href", "class"],
                          },
                        },
                      },
                      template: function (e) {
                        const t = e.users;
                        let a = "";
                        return (
                          t.forEach((e) => {
                            a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${
                              l + e
                            }" alt="" /></div>`;
                          }),
                          `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `
                        );
                      },
                      onInitialDrawComplete: function () {
                        t();
                        const a = e.closest(
                            '[data-kt-timeline-widget-4-blockui="true"]'
                          ),
                          l = KTBlockUI.getInstance(a);
                        l.isBlocked() &&
                          setTimeout(() => {
                            l.release();
                          }, 1e3);
                      },
                    };
                  const s = new vis.Timeline(e, o, r, i);
                  s.on("currentTimeTick", () => {
                    s.off("currentTimeTick");
                  });
                })();
          });
        });
    },
    t = () => {
      const e = document.querySelectorAll("[data-kt-timeline-avatar-src]");
      e &&
        e.forEach((e) => {
          e.setAttribute("src", e.getAttribute("data-kt-timeline-avatar-src")),
            e.removeAttribute("data-kt-timeline-avatar-src");
        });
    };
  return {
    init: function () {
      (() => {
        const e = document.querySelector("#kt_timeline_widget_4_1");
        if (!e) return;
        if (e.innerHTML) return;
        var a = Date.now(),
          l = e.getAttribute("data-kt-timeline-widget-4-image-root"),
          r = new vis.DataSet([
            { id: "research", content: "Research", order: 1 },
            { id: "qa", content: "Phase 2.6 QA", order: 2 },
            { id: "ui", content: "UI Design", order: 3 },
            { id: "dev", content: "Development", order: 4 },
          ]),
          o = new vis.DataSet([
            {
              id: 1,
              group: "research",
              start: a,
              end: moment(a).add(1.5, "hours"),
              content: "Meeting",
              progress: "60%",
              color: "primary",
              users: ["avatars/300-6.jpg", "avatars/300-1.jpg"],
            },
            {
              id: 2,
              group: "qa",
              start: moment(a).add(1, "hours"),
              end: moment(a).add(2, "hours"),
              content: "Testing",
              progress: "47%",
              color: "success",
              users: ["avatars/300-2.jpg"],
            },
            {
              id: 3,
              group: "ui",
              start: moment(a).add(30, "minutes"),
              end: moment(a).add(2.5, "hours"),
              content: "Landing page",
              progress: "55%",
              color: "danger",
              users: ["avatars/300-5.jpg", "avatars/300-20.jpg"],
            },
            {
              id: 4,
              group: "dev",
              start: moment(a).add(1.5, "hours"),
              end: moment(a).add(3, "hours"),
              content: "Products module",
              progress: "75%",
              color: "info",
              users: [
                "avatars/300-23.jpg",
                "avatars/300-12.jpg",
                "avatars/300-9.jpg",
              ],
            },
          ]),
          i = {
            zoomable: !1,
            moveable: !1,
            selectable: !1,
            margin: { item: { horizontal: 10, vertical: 35 } },
            showCurrentTime: !1,
            xss: {
              disabled: !1,
              filterOptions: {
                whiteList: {
                  div: ["class", "style"],
                  img: ["data-kt-timeline-avatar-src", "alt"],
                  a: ["href", "class"],
                },
              },
            },
            template: function (e) {
              const t = e.users;
              let a = "";
              return (
                t.forEach((e) => {
                  a += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${
                    l + e
                  }" alt="" /></div>`;
                }),
                `<div class="rounded-pill bg-light-${e.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">\n                    <div class="position-absolute rounded-pill d-block bg-${e.color} start-0 top-0 h-100 z-index-1" style="width: ${e.progress};"></div>\n        \n                    <div class="d-flex align-items-center position-relative z-index-2">\n                        <div class="symbol-group symbol-hover flex-nowrap me-3">\n                            ${a}\n                        </div>\n        \n                        <a href="#" class="fw-bold text-white text-hover-dark">${e.content}</a>\n                    </div>\n        \n                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">\n                        ${e.progress}\n                    </div>\n                </div>        \n                `
              );
            },
            onInitialDrawComplete: function () {
              t();
              const a = e.closest('[data-kt-timeline-widget-4-blockui="true"]'),
                l = KTBlockUI.getInstance(a);
              l.isBlocked() &&
                setTimeout(() => {
                  l.release();
                }, 1e3);
            },
          };
        const s = new vis.Timeline(e, o, r, i);
        s.on("currentTimeTick", () => {
          s.off("currentTimeTick");
        });
      })(),
        document
          .querySelectorAll('[data-kt-timeline-widget-4-blockui="true"]')
          .forEach((e) => {
            new KTBlockUI(e, { overlayClass: "bg-body" }).block();
          }),
        e();
    },
  };
})();
"undefined" != typeof module && (module.exports = KTTimelineWidget4),
  KTUtil.onDOMContentLoaded(function () {
    KTTimelineWidget4.init();
  });
var KTChartsWidget1 = (function () {
  var e = { self: null, rendered: !1 },
    t = function () {
      var t = document.getElementById("kt_charts_widget_1");
      if (t) {
        var a = t.hasAttribute("data-kt-negative-color")
            ? t.getAttribute("data-kt-negative-color")
            : KTUtil.getCssVariableValue("--bs-success"),
          l = parseInt(KTUtil.css(t, "height")),
          r = KTUtil.getCssVariableValue("--bs-gray-500"),
          o = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          i = {
            series: [
              {
                name: "Subscribed",
                data: [
                  20, 30, 20, 40, 60, 75, 65, 18, 10, 5, 15, 40, 60, 18, 35, 55,
                  20,
                ],
              },
              {
                name: "Unsubscribed",
                data: [
                  -20, -15, -5, -20, -30, -15, -10, -8, -5, -5, -10, -25, -15,
                  -5, -10, -5, -15,
                ],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "bar",
              stacked: !0,
              height: l,
              toolbar: { show: !1 },
            },
            plotOptions: {
              bar: {
                columnWidth: "35%",
                barHeight: "70%",
                borderRadius: [6, 6],
              },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            xaxis: {
              categories: [
                "Jan 5",
                "Jan 7",
                "Jan 9",
                "Jan 11",
                "Jan 13",
                "Jan 15",
                "Jan 17",
                "Jan 19",
                "Jan 20",
                "Jan 21",
                "Jan 23",
                "Jan 24",
                "Jan 25",
                "Jan 26",
                "Jan 24",
                "Jan 28",
                "Jan 29",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              tickAmount: 10,
              labels: { style: { colors: [r], fontSize: "12px" } },
              crosshairs: { show: !1 },
            },
            yaxis: {
              min: -50,
              max: 80,
              tickAmount: 6,
              labels: {
                style: { colors: [r], fontSize: "12px" },
                formatter: function (e) {
                  return parseInt(e) + "K";
                },
              },
            },
            fill: { opacity: 1 },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px", borderRadius: 4 },
              y: {
                formatter: function (e) {
                  return e > 0 ? e + "K" : Math.abs(e) + "K";
                },
              },
            },
            colors: [KTUtil.getCssVariableValue("--bs-primary"), a],
            grid: {
              borderColor: o,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
          };
        (e.self = new ApexCharts(t, i)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t();
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget1),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget1.init();
  });
var KTChartsWidget10 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = { self: null, rendered: !1 },
    r = function (e, t, a, l, r) {
      var o = document.querySelector(a);
      if (o) {
        var i = parseInt(KTUtil.css(o, "height")),
          s = KTUtil.getCssVariableValue("--bs-gray-900"),
          n = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          d = {
            series: [{ name: "Achieved Target", data: l }],
            chart: {
              fontFamily: "inherit",
              type: "bar",
              height: i,
              toolbar: { show: !1 },
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["22%"],
                borderRadius: 5,
                dataLabels: { position: "top" },
                startingShape: "flat",
              },
            },
            legend: { show: !1 },
            dataLabels: {
              enabled: !0,
              offsetY: -30,
              style: { fontSize: "13px", colors: [s] },
              formatter: function (e) {
                return e + "K";
              },
            },
            stroke: { show: !0, width: 2, colors: ["transparent"] },
            xaxis: {
              categories: [
                "Metals",
                "Energy",
                "Agro",
                "Machines",
                "Transport",
                "Textile",
                "Wood",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: {
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                  fontSize: "13px",
                },
              },
              crosshairs: {
                fill: { gradient: { opacityFrom: 0, opacityTo: 0 } },
              },
            },
            yaxis: {
              labels: {
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                  fontSize: "13px",
                },
                formatter: function (e) {
                  return parseInt(e) + "K";
                },
              },
            },
            fill: { opacity: 1 },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return +e + "K";
                },
              },
            },
            colors: [
              KTUtil.getCssVariableValue("--bs-primary"),
              KTUtil.getCssVariableValue("--bs-primary-light"),
            ],
            grid: {
              borderColor: n,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
          };
        e.self = new ApexCharts(o, d);
        var m = document.querySelector(t);
        !0 === r &&
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200),
          m.addEventListener("shown.bs.tab", function (t) {
            !1 === e.rendered && (e.self.render(), (e.rendered = !0));
          });
      }
    };
  return {
    init: function () {
      var o = [30, 18, 43, 70, 13, 37, 23];
      r(e, "#kt_charts_widget_10_tab_1", "#kt_charts_widget_10_chart_1", o, !0);
      var i = [25, 55, 35, 50, 45, 20, 31];
      r(t, "#kt_charts_widget_10_tab_2", "#kt_charts_widget_10_chart_2", i, !1);
      var s = [45, 15, 35, 70, 45, 50, 21];
      r(a, "#kt_charts_widget_10_tab_3", "#kt_charts_widget_10_chart_3", s, !1);
      var n = [15, 55, 25, 50, 25, 60, 31];
      r(l, "#kt_charts_widget_10_tab_4", "#kt_charts_widget_10_chart_4", n, !1),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(),
            t.rendered && t.self.destroy(),
            a.rendered && a.self.destroy(),
            l.rendered && l.self.destroy(),
            r(
              e,
              "#kt_charts_widget_10_tab_1",
              "#kt_charts_widget_10_chart_1",
              o,
              e.rendered
            ),
            r(
              t,
              "#kt_charts_widget_10_tab_2",
              "#kt_charts_widget_10_chart_2",
              i,
              t.rendered
            ),
            r(
              a,
              "#kt_charts_widget_10_tab_3",
              "#kt_charts_widget_10_chart_3",
              s,
              a.rendered
            ),
            r(
              l,
              "#kt_charts_widget_10_tab_4",
              "#kt_charts_widget_10_chart_4",
              n,
              l.rendered
            );
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget10),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget10.init();
  });
var KTChartsWidget11 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = function (e, t, a, l, r) {
      var o = document.querySelector(a),
        i = parseInt(KTUtil.css(o, "height"));
      if (o) {
        var s = KTUtil.getCssVariableValue("--bs-gray-500"),
          n = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          d = KTUtil.getCssVariableValue("--bs-success"),
          m = {
            series: [{ name: "Deliveries", data: l }],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: i,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 80, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [d] },
            xaxis: {
              categories: [
                "",
                "Apr 02",
                "Apr 06",
                "Apr 06",
                "Apr 05",
                "Apr 06",
                "Apr 10",
                "Apr 08",
                "Apr 09",
                "Apr 14",
                "Apr 10",
                "Apr 12",
                "Apr 18",
                "Apr 14",
                "Apr 15",
                "Apr 14",
                "Apr 17",
                "Apr 18",
                "Apr 02",
                "Apr 06",
                "Apr 18",
                "Apr 05",
                "Apr 06",
                "Apr 10",
                "Apr 08",
                "Apr 22",
                "Apr 14",
                "Apr 11",
                "Apr 12",
                "",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              tickAmount: 5,
              labels: {
                rotate: 0,
                rotateAlways: !0,
                style: { colors: s, fontSize: "13px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: d, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "13px" },
              },
            },
            yaxis: {
              tickAmount: 4,
              max: 24,
              min: 10,
              labels: { style: { colors: s, fontSize: "13px" } },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return +e;
                },
              },
            },
            colors: [d],
            grid: {
              borderColor: n,
              strokeDashArray: 3,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: d, strokeWidth: 3 },
          };
        e.self = new ApexCharts(o, m);
        var c = document.querySelector(t);
        !0 === r &&
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200),
          c.addEventListener("shown.bs.tab", function (t) {
            !1 === e.rendered && (e.self.render(), (e.rendered = !0));
          });
      }
    };
  return {
    init: function () {
      var r = [
        16, 19, 19, 16, 16, 14, 15, 15, 17, 17, 19, 19, 18, 18, 20, 20, 18, 18,
        22, 22, 20, 20, 18, 18, 20, 20, 18, 20, 20, 22,
      ];
      l(e, "#kt_charts_widget_11_tab_1", "#kt_charts_widget_11_chart_1", r, !1);
      var o = [
        18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20, 20,
        22, 15, 18, 18, 17, 17, 15, 15, 17, 17, 19, 17,
      ];
      l(t, "#kt_charts_widget_11_tab_2", "#kt_charts_widget_11_chart_2", o, !1);
      var i = [
        17, 20, 20, 19, 19, 17, 17, 19, 19, 21, 21, 19, 19, 21, 21, 18, 18, 16,
        17, 17, 19, 19, 21, 21, 19, 19, 17, 17, 18, 18,
      ];
      l(a, "#kt_charts_widget_11_tab_3", "#kt_charts_widget_11_chart_3", i, !0),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(),
            t.rendered && t.self.destroy(),
            a.rendered && a.self.destroy(),
            l(
              e,
              "#kt_charts_widget_11_tab_1",
              "#kt_charts_widget_11_chart_1",
              r,
              e.rendered
            ),
            l(
              t,
              "#kt_charts_widget_11_tab_2",
              "#kt_charts_widget_11_chart_2",
              o,
              t.rendered
            ),
            l(
              a,
              "#kt_charts_widget_11_tab_3",
              "#kt_charts_widget_11_chart_3",
              i,
              a.rendered
            );
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget11),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget11.init();
  });
var KTChartsWidget12 = (function () {
  var e = function (e, t, a, l) {
    var r = document.querySelector(t);
    if (r) {
      var o = parseInt(KTUtil.css(r, "height")),
        i = KTUtil.getCssVariableValue("--bs-gray-900"),
        s = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
        n = {
          series: [{ name: "Deliveries", data: a }],
          chart: {
            fontFamily: "inherit",
            type: "bar",
            height: o,
            toolbar: { show: !1 },
          },
          plotOptions: {
            bar: {
              horizontal: !1,
              columnWidth: ["22%"],
              borderRadius: 5,
              dataLabels: { position: "top" },
              startingShape: "flat",
            },
          },
          legend: { show: !1 },
          dataLabels: {
            enabled: !0,
            offsetY: -28,
            style: { fontSize: "13px", colors: i },
            formatter: function (e) {
              return e + "K";
            },
          },
          stroke: { show: !0, width: 2, colors: ["transparent"] },
          xaxis: {
            categories: [
              "Grossey",
              "Pet Food",
              "Flowers",
              "Restaurant",
              "Kids Toys",
              "Clothing",
              "Still Water",
            ],
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
            labels: {
              style: {
                colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                fontSize: "13px",
              },
            },
            crosshairs: {
              fill: { gradient: { opacityFrom: 0, opacityTo: 0 } },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                fontSize: "13px",
              },
              formatter: function (e) {
                return e + "K";
              },
            },
          },
          fill: { opacity: 1 },
          states: {
            normal: { filter: { type: "none", value: 0 } },
            hover: { filter: { type: "none", value: 0 } },
            active: {
              allowMultipleDataPointsSelection: !1,
              filter: { type: "none", value: 0 },
            },
          },
          tooltip: {
            style: { fontSize: "12px" },
            y: {
              formatter: function (e) {
                return +e + "K";
              },
            },
          },
          colors: [
            KTUtil.getCssVariableValue("--bs-primary"),
            KTUtil.getCssVariableValue("--bs-primary-light"),
          ],
          grid: {
            borderColor: s,
            strokeDashArray: 4,
            yaxis: { lines: { show: !0 } },
          },
        },
        d = new ApexCharts(r, n),
        m = !1,
        c = document.querySelector(e);
      !0 === l && (d.render(), (m = !0)),
        c.addEventListener("shown.bs.tab", function (e) {
          0 == m && (d.render(), (m = !0));
        });
    }
  };
  return {
    init: function () {
      e(
        "#kt_charts_widget_12_tab_1",
        "#kt_charts_widget_12_chart_1",
        [54, 42, 75, 110, 23, 87, 50],
        !0
      ),
        e(
          "#kt_charts_widget_12_tab_2",
          "#kt_charts_widget_12_chart_2",
          [25, 55, 35, 50, 45, 20, 31],
          !1
        ),
        e(
          "#kt_charts_widget_12_tab_3",
          "#kt_charts_widget_12_chart_3",
          [45, 15, 35, 70, 45, 50, 21],
          !1
        );
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget12),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget12.init();
  });
var KTChartsWidget13 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_13_chart");
        if (e) {
          var t,
            a = function () {
              (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
              var a = t.container.children.push(
                am5xy.XYChart.new(t, {
                  panX: !0,
                  panY: !0,
                  wheelX: "panX",
                  wheelY: "zoomX",
                })
              );
              a.set(
                "cursor",
                am5xy.XYCursor.new(t, { behavior: "none" })
              ).lineY.set("visible", !1);
              var l = [
                  { year: "2003", cars: 1587, motorcycles: 650, bicycles: 121 },
                  { year: "2004", cars: 1567, motorcycles: 683, bicycles: 146 },
                  { year: "2005", cars: 1617, motorcycles: 691, bicycles: 138 },
                  { year: "2006", cars: 1630, motorcycles: 642, bicycles: 127 },
                  { year: "2007", cars: 1660, motorcycles: 699, bicycles: 105 },
                  { year: "2008", cars: 1683, motorcycles: 721, bicycles: 109 },
                  { year: "2009", cars: 1691, motorcycles: 737, bicycles: 112 },
                  { year: "2010", cars: 1298, motorcycles: 680, bicycles: 101 },
                  { year: "2011", cars: 1275, motorcycles: 664, bicycles: 97 },
                  { year: "2012", cars: 1246, motorcycles: 648, bicycles: 93 },
                  { year: "2013", cars: 1318, motorcycles: 697, bicycles: 111 },
                  { year: "2014", cars: 1213, motorcycles: 633, bicycles: 87 },
                  { year: "2015", cars: 1199, motorcycles: 621, bicycles: 79 },
                  { year: "2016", cars: 1110, motorcycles: 210, bicycles: 81 },
                  { year: "2017", cars: 1165, motorcycles: 232, bicycles: 75 },
                  { year: "2018", cars: 1145, motorcycles: 219, bicycles: 88 },
                  { year: "2019", cars: 1163, motorcycles: 201, bicycles: 82 },
                  { year: "2020", cars: 1180, motorcycles: 285, bicycles: 87 },
                  { year: "2021", cars: 1159, motorcycles: 277, bicycles: 71 },
                ],
                r = a.xAxes.push(
                  am5xy.CategoryAxis.new(t, {
                    categoryField: "year",
                    startLocation: 0.5,
                    endLocation: 0.5,
                    renderer: am5xy.AxisRendererX.new(t, {}),
                    tooltip: am5.Tooltip.new(t, {}),
                  })
                );
              r
                .get("renderer")
                .grid.template.setAll({ disabled: !0, strokeOpacity: 0 }),
                r
                  .get("renderer")
                  .labels.template.setAll({
                    fontWeight: "400",
                    fontSize: 13,
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-500")
                    ),
                  }),
                r.data.setAll(l);
              var o = a.yAxes.push(
                am5xy.ValueAxis.new(t, {
                  renderer: am5xy.AxisRendererY.new(t, {}),
                })
              );
              function i(e, i, s) {
                var n = a.series.push(
                  am5xy.LineSeries.new(t, {
                    name: e,
                    xAxis: r,
                    yAxis: o,
                    stacked: !0,
                    valueYField: i,
                    categoryXField: "year",
                    fill: am5.color(s),
                    tooltip: am5.Tooltip.new(t, {
                      pointerOrientation: "horizontal",
                      labelText: "[bold]{name}[/]\n{categoryX}: {valueY}",
                    }),
                  })
                );
                n.fills.template.setAll({ fillOpacity: 0.5, visible: !0 }),
                  n.data.setAll(l),
                  n.appear(1e3);
              }
              o
                .get("renderer")
                .grid.template.setAll({
                  stroke: am5.color(
                    KTUtil.getCssVariableValue("--bs-gray-300")
                  ),
                  strokeWidth: 1,
                  strokeOpacity: 1,
                  strokeDasharray: [3],
                }),
                o
                  .get("renderer")
                  .labels.template.setAll({
                    fontWeight: "400",
                    fontSize: 13,
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-500")
                    ),
                  }),
                i("Cars", "cars", KTUtil.getCssVariableValue("--bs-primary")),
                i(
                  "Motorcycles",
                  "motorcycles",
                  KTUtil.getCssVariableValue("--bs-success")
                ),
                i(
                  "Bicycles",
                  "bicycles",
                  KTUtil.getCssVariableValue("--bs-warning")
                ),
                a.set(
                  "scrollbarX",
                  am5.Scrollbar.new(t, {
                    orientation: "horizontal",
                    marginBottom: 25,
                    height: 8,
                  })
                );
              var s = r.makeDataItem({ category: "2016", endCategory: "2021" });
              r.createAxisRange(s),
                s
                  .get("grid")
                  .setAll({
                    stroke: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-200")
                    ),
                    strokeOpacity: 0.5,
                    strokeDasharray: [3],
                  }),
                s
                  .get("axisFill")
                  .setAll({
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-200")
                    ),
                    fillOpacity: 0.1,
                  }),
                s
                  .get("label")
                  .setAll({
                    inside: !0,
                    text: "Fines increased",
                    rotation: 90,
                    centerX: am5.p100,
                    centerY: am5.p100,
                    location: 0,
                    paddingBottom: 10,
                    paddingRight: 15,
                  });
              var n = r.makeDataItem({ category: "2021" });
              r.createAxisRange(n),
                n
                  .get("grid")
                  .setAll({
                    stroke: am5.color(
                      KTUtil.getCssVariableValue("--bs-danger")
                    ),
                    strokeOpacity: 1,
                    strokeDasharray: [3],
                  }),
                n
                  .get("label")
                  .setAll({
                    inside: !0,
                    text: "Fee introduced",
                    rotation: 90,
                    centerX: am5.p100,
                    centerY: am5.p100,
                    location: 0,
                    paddingBottom: 10,
                    paddingRight: 15,
                  }),
                a.appear(1e3, 100);
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget13),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget13.init();
  });
var KTChartsWidget14 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_14_chart");
        e &&
          am5.ready(function () {
            var t = am5.Root.new(e);
            t.setThemes([am5themes_Animated.new(t)]);
            var a = t.container.children.push(
                am5radar.RadarChart.new(t, {
                  panX: !1,
                  panY: !1,
                  wheelX: "panX",
                  wheelY: "zoomX",
                  innerRadius: am5.percent(20),
                  startAngle: -90,
                  endAngle: 180,
                })
              ),
              l = [
                {
                  category: "Research",
                  value: 80,
                  full: 100,
                  columnSettings: {
                    fillOpacity: 1,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-info")),
                  },
                },
                {
                  category: "Marketing",
                  value: 35,
                  full: 100,
                  columnSettings: {
                    fillOpacity: 1,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-danger")),
                  },
                },
                {
                  category: "Distribution",
                  value: 92,
                  full: 100,
                  columnSettings: {
                    fillOpacity: 1,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                  },
                },
                {
                  category: "Human Resources",
                  value: 68,
                  full: 100,
                  columnSettings: {
                    fillOpacity: 1,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                  },
                },
              ];
            a.set(
              "cursor",
              am5radar.RadarCursor.new(t, { behavior: "zoomX" })
            ).lineY.set("visible", !1);
            var r = am5radar.AxisRendererCircular.new(t, {});
            r.labels.template.setAll({ radius: 10 }),
              r.grid.template.setAll({ forceHidden: !0 });
            var o = a.xAxes.push(
              am5xy.ValueAxis.new(t, {
                renderer: r,
                min: 0,
                max: 100,
                strictMinMax: !0,
                numberFormat: "#'%'",
                tooltip: am5.Tooltip.new(t, {}),
              })
            );
            o.get("renderer").labels.template.setAll({
              fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
              fontWeight: "500",
              fontSize: 16,
            });
            var i = am5radar.AxisRendererRadial.new(t, { minGridDistance: 20 });
            i.labels.template.setAll({
              centerX: am5.p100,
              fontWeight: "500",
              fontSize: 18,
              fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
              templateField: "columnSettings",
            }),
              i.grid.template.setAll({ forceHidden: !0 });
            var s = a.yAxes.push(
              am5xy.CategoryAxis.new(t, {
                categoryField: "category",
                renderer: i,
              })
            );
            s.data.setAll(l);
            var n = a.series.push(
              am5radar.RadarColumnSeries.new(t, {
                xAxis: o,
                yAxis: s,
                clustered: !1,
                valueXField: "full",
                categoryYField: "category",
                fill: t.interfaceColors.get("alternativeBackground"),
              })
            );
            n.columns.template.setAll({
              width: am5.p100,
              fillOpacity: 0.08,
              strokeOpacity: 0,
              cornerRadius: 20,
            }),
              n.data.setAll(l);
            var d = a.series.push(
              am5radar.RadarColumnSeries.new(t, {
                xAxis: o,
                yAxis: s,
                clustered: !1,
                valueXField: "value",
                categoryYField: "category",
              })
            );
            d.columns.template.setAll({
              width: am5.p100,
              strokeOpacity: 0,
              tooltipText: "{category}: {valueX}%",
              cornerRadius: 20,
              templateField: "columnSettings",
            }),
              d.data.setAll(l),
              n.appear(1e3),
              d.appear(1e3),
              a.appear(1e3, 100);
          });
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget14),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget14.init();
  });
var KTChartsWidget15 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_15_chart");
        if (e) {
          var t,
            a = function () {
              (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
              var a = t.container.children.push(
                  am5xy.XYChart.new(t, {
                    panX: !1,
                    panY: !1,
                    layout: t.verticalLayout,
                  })
                ),
                l =
                  (a.get("colors"),
                  [
                    {
                      country: "US",
                      visits: 725,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/united-states.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                    {
                      country: "UK",
                      visits: 625,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/united-kingdom.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                    {
                      country: "China",
                      visits: 602,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/china.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                    {
                      country: "Japan",
                      visits: 509,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/japan.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                    {
                      country: "Germany",
                      visits: 322,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/germany.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                    {
                      country: "France",
                      visits: 214,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/france.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                    {
                      country: "India",
                      visits: 204,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/india.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                    {
                      country: "Spain",
                      visits: 200,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/spain.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                    {
                      country: "Italy",
                      visits: 165,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/italy.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                    {
                      country: "Russia",
                      visits: 152,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/russia.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                    {
                      country: "Norway",
                      visits: 125,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/norway.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                    {
                      country: "Canada",
                      visits: 99,
                      icon: "https://www.amcharts.com/wp-content/uploads/flags/canada.svg",
                      columnSettings: {
                        fill: am5.color(
                          KTUtil.getCssVariableValue("--bs-primary")
                        ),
                      },
                    },
                  ]),
                r = a.xAxes.push(
                  am5xy.CategoryAxis.new(t, {
                    categoryField: "country",
                    renderer: am5xy.AxisRendererX.new(t, {
                      minGridDistance: 30,
                    }),
                    bullet: function (e, t, a) {
                      return am5xy.AxisBullet.new(e, {
                        location: 0.5,
                        sprite: am5.Picture.new(e, {
                          width: 24,
                          height: 24,
                          centerY: am5.p50,
                          centerX: am5.p50,
                          src: a.dataContext.icon,
                        }),
                      });
                    },
                  })
                );
              r
                .get("renderer")
                .labels.template.setAll({
                  paddingTop: 20,
                  fontWeight: "400",
                  fontSize: 10,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
                }),
                r
                  .get("renderer")
                  .grid.template.setAll({ disabled: !0, strokeOpacity: 0 }),
                r.data.setAll(l);
              var o = a.yAxes.push(
                am5xy.ValueAxis.new(t, {
                  renderer: am5xy.AxisRendererY.new(t, {}),
                })
              );
              o
                .get("renderer")
                .grid.template.setAll({
                  stroke: am5.color(
                    KTUtil.getCssVariableValue("--bs-gray-300")
                  ),
                  strokeWidth: 1,
                  strokeOpacity: 1,
                  strokeDasharray: [3],
                }),
                o
                  .get("renderer")
                  .labels.template.setAll({
                    fontWeight: "400",
                    fontSize: 10,
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-500")
                    ),
                  });
              var i = a.series.push(
                am5xy.ColumnSeries.new(t, {
                  xAxis: r,
                  yAxis: o,
                  valueYField: "visits",
                  categoryXField: "country",
                })
              );
              i.columns.template.setAll({
                tooltipText: "{categoryX}: {valueY}",
                tooltipY: 0,
                strokeOpacity: 0,
                templateField: "columnSettings",
              }),
                i.columns.template.setAll({
                  strokeOpacity: 0,
                  cornerRadiusBR: 0,
                  cornerRadiusTR: 6,
                  cornerRadiusBL: 0,
                  cornerRadiusTL: 6,
                }),
                i.data.setAll(l),
                i.appear(),
                a.appear(1e3, 100);
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget15),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget15.init();
  });
var KTChartsWidget16 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_16_chart");
        if (e) {
          var t,
            a = function () {
              (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
              var a = t.container.children.push(
                  am5xy.XYChart.new(t, {
                    panX: !1,
                    panY: !1,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    layout: t.verticalLayout,
                  })
                ),
                l =
                  (a.get("colors"),
                  [
                    { country: "US", visits: 725 },
                    { country: "UK", visits: 625 },
                    { country: "China", visits: 602 },
                    { country: "Japan", visits: 509 },
                    { country: "Germany", visits: 322 },
                    { country: "France", visits: 214 },
                    { country: "India", visits: 204 },
                    { country: "Spain", visits: 198 },
                    { country: "Italy", visits: 165 },
                    { country: "Russia", visits: 130 },
                    { country: "Norway", visits: 93 },
                    { country: "Canada", visits: 41 },
                  ]);
              !(function () {
                for (var e = 0, t = 0; t < l.length; t++) e += l[t].visits;
                var a = 0;
                for (t = 0; t < l.length; t++)
                  (a += l[t].visits), (l[t].pareto = (a / e) * 100);
              })();
              var r = a.xAxes.push(
                am5xy.CategoryAxis.new(t, {
                  categoryField: "country",
                  renderer: am5xy.AxisRendererX.new(t, { minGridDistance: 30 }),
                })
              );
              r
                .get("renderer")
                .labels.template.setAll({
                  paddingTop: 10,
                  fontWeight: "400",
                  fontSize: 13,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
                }),
                r
                  .get("renderer")
                  .grid.template.setAll({ disabled: !0, strokeOpacity: 0 }),
                r.data.setAll(l);
              var o = a.yAxes.push(
                am5xy.ValueAxis.new(t, {
                  renderer: am5xy.AxisRendererY.new(t, {}),
                })
              );
              o
                .get("renderer")
                .labels.template.setAll({
                  paddingLeft: 10,
                  fontWeight: "400",
                  fontSize: 13,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
                }),
                o
                  .get("renderer")
                  .grid.template.setAll({
                    stroke: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-300")
                    ),
                    strokeWidth: 1,
                    strokeOpacity: 1,
                    strokeDasharray: [3],
                  });
              var i = am5xy.AxisRendererY.new(t, { opposite: !0 }),
                s = a.yAxes.push(
                  am5xy.ValueAxis.new(t, {
                    renderer: i,
                    min: 0,
                    max: 100,
                    strictMinMax: !0,
                  })
                );
              s
                .get("renderer")
                .labels.template.setAll({
                  fontWeight: "400",
                  fontSize: 13,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
                }),
                i.grid.template.set("forceHidden", !0),
                s.set("numberFormat", "#'%");
              var n = a.series.push(
                am5xy.ColumnSeries.new(t, {
                  xAxis: r,
                  yAxis: o,
                  valueYField: "visits",
                  categoryXField: "country",
                })
              );
              n.columns.template.setAll({
                tooltipText: "{categoryX}: {valueY}",
                tooltipY: 0,
                strokeOpacity: 0,
                cornerRadiusTL: 6,
                cornerRadiusTR: 6,
              }),
                n.columns.template.adapters.add("fill", function (e, t) {
                  return a
                    .get("colors")
                    .getIndex(n.dataItems.indexOf(t.dataItem));
                });
              var d = a.series.push(
                am5xy.LineSeries.new(t, {
                  xAxis: r,
                  yAxis: s,
                  valueYField: "pareto",
                  categoryXField: "country",
                  stroke: am5.color(KTUtil.getCssVariableValue("--bs-dark")),
                  maskBullets: !1,
                })
              );
              d.bullets.push(function () {
                return am5.Bullet.new(t, {
                  locationY: 1,
                  sprite: am5.Circle.new(t, {
                    radius: 5,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                    stroke: am5.color(KTUtil.getCssVariableValue("--bs-dark")),
                  }),
                });
              }),
                n.data.setAll(l),
                d.data.setAll(l),
                n.appear(),
                a.appear(1e3, 100);
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget16),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget16.init();
  });
var KTChartsWidget17 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_17_chart");
        if (e) {
          var t,
            a = function () {
              (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
              var a = t.container.children
                .push(
                  am5percent.PieChart.new(t, {
                    startAngle: 180,
                    endAngle: 360,
                    layout: t.verticalLayout,
                    innerRadius: am5.percent(50),
                  })
                )
                .series.push(
                  am5percent.PieSeries.new(t, {
                    startAngle: 180,
                    endAngle: 360,
                    valueField: "value",
                    categoryField: "category",
                    alignLabels: !1,
                  })
                );
              a.labels.template.setAll({
                fontWeight: "400",
                fontSize: 13,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
              }),
                a.states.create("hidden", { startAngle: 180, endAngle: 180 }),
                a.slices.template.setAll({ cornerRadius: 5 }),
                a.ticks.template.setAll({ forceHidden: !0 }),
                a.data.setAll([
                  {
                    value: 10,
                    category: "One",
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                  },
                  {
                    value: 9,
                    category: "Two",
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                  },
                  {
                    value: 6,
                    category: "Three",
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-danger")),
                  },
                  {
                    value: 5,
                    category: "Four",
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-warning")),
                  },
                  {
                    value: 4,
                    category: "Five",
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-info")),
                  },
                  {
                    value: 3,
                    category: "Six",
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-secondary")
                    ),
                  },
                ]),
                a.appear(1e3, 100);
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget17),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget17.init();
  });
var KTChartsWidget18 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_charts_widget_18_chart");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-900"),
          r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          o = {
            series: [
              { name: "Spent time", data: [54, 42, 75, 110, 23, 87, 50] },
            ],
            chart: {
              fontFamily: "inherit",
              type: "bar",
              height: a,
              toolbar: { show: !1 },
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["28%"],
                borderRadius: 5,
                dataLabels: { position: "top" },
                startingShape: "flat",
              },
            },
            legend: { show: !1 },
            dataLabels: {
              enabled: !0,
              offsetY: -28,
              style: { fontSize: "13px", colors: [l] },
              formatter: function (e) {
                return e;
              },
            },
            stroke: { show: !0, width: 2, colors: ["transparent"] },
            xaxis: {
              categories: [
                "QA Analysis",
                "Marketing",
                "Web Dev",
                "Maths",
                "Front-end Dev",
                "Physics",
                "Phylosophy",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: {
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                  fontSize: "13px",
                },
              },
              crosshairs: {
                fill: { gradient: { opacityFrom: 0, opacityTo: 0 } },
              },
            },
            yaxis: {
              labels: {
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                  fontSize: "13px",
                },
                formatter: function (e) {
                  return e + "H";
                },
              },
            },
            fill: { opacity: 1 },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return +e + " hours";
                },
              },
            },
            colors: [
              KTUtil.getCssVariableValue("--bs-primary"),
              KTUtil.getCssVariableValue("--bs-primary-light"),
            ],
            grid: {
              borderColor: r,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
          };
        (e.self = new ApexCharts(t, o)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget18),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget18.init();
  });
var KTChartsWidget19 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_19_chart_1");
        if (e) {
          var t,
            a = function () {
              (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
              var a = t.container.children.push(
                  am5radar.RadarChart.new(t, {
                    panX: !1,
                    panY: !1,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    innerRadius: am5.percent(20),
                    startAngle: -90,
                    endAngle: 180,
                  })
                ),
                l = [
                  {
                    category: "Research",
                    value: 80,
                    full: 100,
                    columnSettings: {
                      fillOpacity: 1,
                      fill: am5.color(KTUtil.getCssVariableValue("--bs-info")),
                    },
                  },
                  {
                    category: "Marketing",
                    value: 35,
                    full: 100,
                    columnSettings: {
                      fillOpacity: 1,
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-danger")
                      ),
                    },
                  },
                  {
                    category: "Distribution",
                    value: 92,
                    full: 100,
                    columnSettings: {
                      fillOpacity: 1,
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-primary")
                      ),
                    },
                  },
                  {
                    category: "Human Resources",
                    value: 68,
                    full: 100,
                    columnSettings: {
                      fillOpacity: 1,
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-success")
                      ),
                    },
                  },
                ];
              a.set(
                "cursor",
                am5radar.RadarCursor.new(t, { behavior: "zoomX" })
              ).lineY.set("visible", !1);
              var r = am5radar.AxisRendererCircular.new(t, {});
              r.labels.template.setAll({ radius: 10 }),
                r.grid.template.setAll({ forceHidden: !0 });
              var o = a.xAxes.push(
                am5xy.ValueAxis.new(t, {
                  renderer: r,
                  min: 0,
                  max: 100,
                  strictMinMax: !0,
                  numberFormat: "#'%'",
                  tooltip: am5.Tooltip.new(t, {}),
                })
              );
              o.get("renderer").labels.template.setAll({
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
                fontWeight: "500",
                fontSize: 16,
              });
              var i = am5radar.AxisRendererRadial.new(t, {
                minGridDistance: 20,
              });
              i.labels.template.setAll({
                centerX: am5.p100,
                fontWeight: "500",
                fontSize: 18,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
                templateField: "columnSettings",
              }),
                i.grid.template.setAll({ forceHidden: !0 });
              var s = a.yAxes.push(
                am5xy.CategoryAxis.new(t, {
                  categoryField: "category",
                  renderer: i,
                })
              );
              s.data.setAll(l);
              var n = a.series.push(
                am5radar.RadarColumnSeries.new(t, {
                  xAxis: o,
                  yAxis: s,
                  clustered: !1,
                  valueXField: "full",
                  categoryYField: "category",
                  fill: t.interfaceColors.get("alternativeBackground"),
                })
              );
              n.columns.template.setAll({
                width: am5.p100,
                fillOpacity: 0.08,
                strokeOpacity: 0,
                cornerRadius: 20,
              }),
                n.data.setAll(l);
              var d = a.series.push(
                am5radar.RadarColumnSeries.new(t, {
                  xAxis: o,
                  yAxis: s,
                  clustered: !1,
                  valueXField: "value",
                  categoryYField: "category",
                })
              );
              d.columns.template.setAll({
                width: am5.p100,
                strokeOpacity: 0,
                tooltipText: "{category}: {valueX}%",
                cornerRadius: 20,
                templateField: "columnSettings",
              }),
                d.data.setAll(l),
                n.appear(1e3),
                d.appear(1e3),
                a.appear(1e3, 100);
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })(),
      (function () {
        if ("undefined" != typeof am5) {
          var e,
            t = document.getElementById("kt_charts_widget_19_chart_2");
          if (t) {
            var a = function () {
              (e = am5.Root.new(t)).setThemes([am5themes_Animated.new(e)]);
              var a = e.container.children.push(
                  am5radar.RadarChart.new(e, {
                    panX: !1,
                    panY: !1,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    innerRadius: am5.percent(20),
                    startAngle: -90,
                    endAngle: 180,
                  })
                ),
                l = [
                  {
                    category: "Research",
                    value: 40,
                    full: 100,
                    columnSettings: {
                      fillOpacity: 1,
                      fill: am5.color(KTUtil.getCssVariableValue("--bs-info")),
                    },
                  },
                  {
                    category: "Marketing",
                    value: 50,
                    full: 100,
                    columnSettings: {
                      fillOpacity: 1,
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-danger")
                      ),
                    },
                  },
                  {
                    category: "Distribution",
                    value: 80,
                    full: 100,
                    columnSettings: {
                      fillOpacity: 1,
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-primary")
                      ),
                    },
                  },
                  {
                    category: "Human Resources",
                    value: 70,
                    full: 100,
                    columnSettings: {
                      fillOpacity: 1,
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-success")
                      ),
                    },
                  },
                ];
              a.set(
                "cursor",
                am5radar.RadarCursor.new(e, { behavior: "zoomX" })
              ).lineY.set("visible", !1);
              var r = am5radar.AxisRendererCircular.new(e, {});
              r.labels.template.setAll({ radius: 10 }),
                r.grid.template.setAll({ forceHidden: !0 });
              var o = a.xAxes.push(
                  am5xy.ValueAxis.new(e, {
                    renderer: r,
                    min: 0,
                    max: 100,
                    strictMinMax: !0,
                    numberFormat: "#'%'",
                    tooltip: am5.Tooltip.new(e, {}),
                  })
                ),
                i = am5radar.AxisRendererRadial.new(e, { minGridDistance: 20 });
              i.labels.template.setAll({
                centerX: am5.p100,
                fontWeight: "500",
                fontSize: 18,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
                templateField: "columnSettings",
              }),
                i.grid.template.setAll({ forceHidden: !0 });
              var s = a.yAxes.push(
                am5xy.CategoryAxis.new(e, {
                  categoryField: "category",
                  renderer: i,
                })
              );
              s.data.setAll(l);
              var n = a.series.push(
                am5radar.RadarColumnSeries.new(e, {
                  xAxis: o,
                  yAxis: s,
                  clustered: !1,
                  valueXField: "full",
                  categoryYField: "category",
                  fill: e.interfaceColors.get("alternativeBackground"),
                })
              );
              n.columns.template.setAll({
                width: am5.p100,
                fillOpacity: 0.08,
                strokeOpacity: 0,
                cornerRadius: 20,
              }),
                n.data.setAll(l);
              var d = a.series.push(
                am5radar.RadarColumnSeries.new(e, {
                  xAxis: o,
                  yAxis: s,
                  clustered: !1,
                  valueXField: "value",
                  categoryYField: "category",
                })
              );
              d.columns.template.setAll({
                width: am5.p100,
                strokeOpacity: 0,
                tooltipText: "{category}: {valueX}%",
                cornerRadius: 20,
                templateField: "columnSettings",
              }),
                d.data.setAll(l),
                n.appear(1e3),
                d.appear(1e3),
                a.appear(1e3, 100);
            };
            am5.ready(function () {
              a();
            }),
              KTThemeMode.on("kt.thememode.change", function () {
                e.dispose(), a();
              });
          }
        }
      })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget19),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget19.init();
  });
var KTChartsWidget2 = (function () {
  var e = { self: null, rendered: !1 },
    t = function () {
      var t = document.getElementById("kt_charts_widget_2");
      if (t) {
        var a = t.getAttribute("data-kt-chart-color"),
          l = parseInt(KTUtil.css(t, "height")),
          r = KTUtil.getCssVariableValue("--bs-gray-800"),
          o = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          i = KTUtil.getCssVariableValue("--bs-" + a),
          s = KTUtil.getCssVariableValue("--bs-" + a + "-light"),
          n = {
            series: [
              {
                name: "Overview",
                data: [15, 15, 45, 45, 25, 25, 55, 55, 20, 20, 37],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: l,
              toolbar: { show: !1 },
              zoom: { enabled: !1 },
              sparkline: { enabled: !0 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: { type: "solid", opacity: 1 },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [i] },
            xaxis: {
              categories: [
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1, style: { colors: r, fontSize: "12px" } },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: { color: o, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              min: 0,
              max: 60,
              labels: { show: !1, style: { colors: r, fontSize: "12px" } },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e;
                },
              },
            },
            colors: [s],
            markers: { colors: s, strokeColor: i, strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, n)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t();
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget2),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget2.init();
  });
var KTChartsWidget20 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_charts_widget_20");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-500"),
          r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          o = KTUtil.getCssVariableValue("--bs-danger"),
          i = KTUtil.getCssVariableValue("--bs-danger"),
          s = {
            series: [
              {
                name: t.getAttribute("data-kt-chart-info"),
                data: [
                  34.5, 34.5, 35, 35, 35.5, 35.5, 35, 35, 35.5, 35.5, 35, 35,
                  34.5, 34.5, 35, 35, 35.4, 35.4, 35,
                ],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 80, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [o] },
            xaxis: {
              categories: [
                "",
                "Apr 02",
                "Apr 03",
                "Apr 04",
                "Apr 05",
                "Apr 06",
                "Apr 07",
                "Apr 08",
                "Apr 09",
                "Apr 10",
                "Apr 11",
                "Apr 12",
                "Apr 13",
                "Apr 14",
                "Apr 17",
                "Apr 18",
                "Apr 19",
                "Apr 21",
                "",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              tickAmount: 6,
              labels: {
                rotate: 0,
                rotateAlways: !0,
                style: { colors: l, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: o, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              max: 36.3,
              min: 33,
              tickAmount: 6,
              labels: {
                style: { colors: l, fontSize: "12px" },
                formatter: function (e) {
                  return "$" + parseInt(10 * e);
                },
              },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return "$" + parseInt(10 * e);
                },
              },
            },
            colors: [i],
            grid: {
              borderColor: r,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: o, strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, s)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget20),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget20.init();
  });
var KTChartsWidget21 = {
  init: function () {
    !(function () {
      var e = document.getElementById("kt_charts_widget_21");
      if (e) {
        var t = new ApexCharts(e, {
          type: "serial",
          theme: "light",
          legend: {
            equalWidths: !1,
            useGraphSettings: !0,
            valueAlign: "left",
            valueWidth: 120,
          },
          dataProvider: [
            {
              date: "2012-01-01",
              distance: 227,
              townName: "New York",
              townName2: "New York",
              townSize: 25,
              latitude: 40.71,
              duration: 408,
            },
            {
              date: "2012-01-02",
              distance: 371,
              townName: "Washington",
              townSize: 14,
              latitude: 38.89,
              duration: 482,
            },
            {
              date: "2012-01-03",
              distance: 433,
              townName: "Wilmington",
              townSize: 6,
              latitude: 34.22,
              duration: 562,
            },
            {
              date: "2012-01-04",
              distance: 345,
              townName: "Jacksonville",
              townSize: 7,
              latitude: 30.35,
              duration: 379,
            },
            {
              date: "2012-01-05",
              distance: 480,
              townName: "Miami",
              townName2: "Miami",
              townSize: 10,
              latitude: 25.83,
              duration: 501,
            },
            {
              date: "2012-01-06",
              distance: 386,
              townName: "Tallahassee",
              townSize: 7,
              latitude: 30.46,
              duration: 443,
            },
            {
              date: "2012-01-07",
              distance: 348,
              townName: "New Orleans",
              townSize: 10,
              latitude: 29.94,
              duration: 405,
            },
            {
              date: "2012-01-08",
              distance: 238,
              townName: "Houston",
              townName2: "Houston",
              townSize: 16,
              latitude: 29.76,
              duration: 309,
            },
            {
              date: "2012-01-09",
              distance: 218,
              townName: "Dalas",
              townSize: 17,
              latitude: 32.8,
              duration: 287,
            },
            {
              date: "2012-01-10",
              distance: 349,
              townName: "Oklahoma City",
              townSize: 11,
              latitude: 35.49,
              duration: 485,
            },
            {
              date: "2012-01-11",
              distance: 603,
              townName: "Kansas City",
              townSize: 10,
              latitude: 39.1,
              duration: 890,
            },
            {
              date: "2012-01-12",
              distance: 534,
              townName: "Denver",
              townName2: "Denver",
              townSize: 18,
              latitude: 39.74,
              duration: 810,
            },
            {
              date: "2012-01-13",
              townName: "Salt Lake City",
              townSize: 12,
              distance: 425,
              duration: 670,
              latitude: 40.75,
              dashLength: 8,
              alpha: 0.4,
            },
            {
              date: "2012-01-14",
              latitude: 36.1,
              duration: 470,
              townName: "Las Vegas",
              townName2: "Las Vegas",
            },
            { date: "2012-01-15" },
            { date: "2012-01-16" },
            { date: "2012-01-17" },
            { date: "2012-01-18" },
            { date: "2012-01-19" },
          ],
          valueAxes: [
            {
              id: "distanceAxis",
              axisAlpha: 0,
              gridAlpha: 0,
              position: "left",
              title: "distance",
            },
            {
              id: "latitudeAxis",
              axisAlpha: 0,
              gridAlpha: 0,
              labelsEnabled: !1,
              position: "right",
            },
            {
              id: "durationAxis",
              duration: "mm",
              durationUnits: { hh: "h ", mm: "min" },
              axisAlpha: 0,
              gridAlpha: 0,
              inside: !0,
              position: "right",
              title: "duration",
            },
          ],
          graphs: [
            {
              alphaField: "alpha",
              balloonText: "[[value]] miles",
              dashLengthField: "dashLength",
              fillAlphas: 0.7,
              legendPeriodValueText: "total: [[value.sum]] mi",
              legendValueText: "[[value]] mi",
              title: "distance",
              type: "column",
              valueField: "distance",
              valueAxis: "distanceAxis",
            },
            {
              balloonText: "latitude:[[value]]",
              bullet: "round",
              bulletBorderAlpha: 1,
              useLineColorForBulletBorder: !0,
              bulletColor: "#FFFFFF",
              bulletSizeField: "townSize",
              dashLengthField: "dashLength",
              descriptionField: "townName",
              labelPosition: "right",
              labelText: "[[townName2]]",
              legendValueText: "[[value]]/[[description]]",
              title: "latitude/city",
              fillAlphas: 0,
              valueField: "latitude",
              valueAxis: "latitudeAxis",
            },
            {
              bullet: "square",
              bulletBorderAlpha: 1,
              bulletBorderThickness: 1,
              dashLengthField: "dashLength",
              legendValueText: "[[value]]",
              title: "duration",
              fillAlphas: 0,
              valueField: "duration",
              valueAxis: "durationAxis",
            },
          ],
          chartCursor: {
            categoryBalloonDateFormat: "DD",
            cursorAlpha: 0.1,
            cursorColor: "#000000",
            fullWidth: !0,
            valueBalloonsEnabled: !1,
            zoomable: !1,
          },
          dataDateFormat: "YYYY-MM-DD",
          categoryField: "date",
          categoryAxis: {
            dateFormats: [
              { period: "DD", format: "DD" },
              { period: "WW", format: "MMM DD" },
              { period: "MM", format: "MMM" },
              { period: "YYYY", format: "YYYY" },
            ],
            parseDates: !0,
            autoGridCount: !1,
            axisColor: "#555555",
            gridAlpha: 0.1,
            gridColor: "#FFFFFF",
            gridCount: 50,
          },
          export: { enabled: !0 },
        });
        setTimeout(function () {
          t.render();
        }, 200);
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget21),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget21.init();
  });
var KTChartsWidget22 = (function () {
  var e = function (e, t, a, l) {
    var r = document.querySelector(t);
    if (r) {
      parseInt(KTUtil.css(r, "height"));
      var o = {
          series: a,
          chart: { fontFamily: "inherit", type: "donut", width: 250 },
          plotOptions: {
            pie: {
              donut: { size: "50%", labels: { value: { fontSize: "10px" } } },
            },
          },
          colors: [
            KTUtil.getCssVariableValue("--bs-info"),
            KTUtil.getCssVariableValue("--bs-success"),
            KTUtil.getCssVariableValue("--bs-primary"),
            KTUtil.getCssVariableValue("--bs-danger"),
          ],
          stroke: { width: 0 },
          labels: ["Sales", "Sales", "Sales", "Sales"],
          legend: { show: !1 },
          fill: { type: "false" },
        },
        i = new ApexCharts(r, o),
        s = !1,
        n = document.querySelector(e);
      !0 === l && (i.render(), (s = !0)),
        n.addEventListener("shown.bs.tab", function (e) {
          0 == s && (i.render(), (s = !0));
        });
    }
  };
  return {
    init: function () {
      e(
        "#kt_chart_widgets_22_tab_1",
        "#kt_chart_widgets_22_chart_1",
        [20, 100, 15, 25],
        !0
      ),
        e(
          "#kt_chart_widgets_22_tab_2",
          "#kt_chart_widgets_22_chart_2",
          [70, 13, 11, 2],
          !1
        );
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget22),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget22.init();
  });
var KTChartsWidget23 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_23");
        if (e) {
          var t,
            a = function () {
              (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
              var a = t.container.children.push(
                  am5xy.XYChart.new(t, {
                    panX: !1,
                    panY: !1,
                    layout: t.verticalLayout,
                  })
                ),
                l = [
                  {
                    year: "2016",
                    income: 23.5,
                    expenses: 21.1,
                    columnSettings: {
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-primary")
                      ),
                    },
                  },
                  {
                    year: "2017",
                    income: 26.2,
                    expenses: 30.5,
                    columnSettings: {
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-primary")
                      ),
                    },
                  },
                  {
                    year: "2018",
                    income: 30.1,
                    expenses: 34.9,
                    columnSettings: {
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-primary")
                      ),
                    },
                  },
                  {
                    year: "2019",
                    income: 29.5,
                    expenses: 31.1,
                    columnSettings: {
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-primary")
                      ),
                    },
                  },
                  {
                    year: "2020",
                    income: 30.6,
                    expenses: 28.2,
                    strokeSettings: { strokeWidth: 3, strokeDasharray: [5, 5] },
                    columnSettings: {
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-primary")
                      ),
                    },
                  },
                  {
                    year: "2021",
                    income: 40.6,
                    expenses: 28.2,
                    strokeSettings: { strokeWidth: 3, strokeDasharray: [5, 5] },
                    columnSettings: {
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-primary")
                      ),
                    },
                  },
                  {
                    year: "2022",
                    income: 34.1,
                    expenses: 32.9,
                    strokeSettings: { strokeWidth: 3, strokeDasharray: [5, 5] },
                    columnSettings: {
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-primary")
                      ),
                    },
                  },
                ],
                r = a.xAxes.push(
                  am5xy.CategoryAxis.new(t, {
                    categoryField: "year",
                    renderer: am5xy.AxisRendererX.new(t, {}),
                  })
                );
              r.data.setAll(l),
                r
                  .get("renderer")
                  .labels.template.setAll({
                    paddingTop: 20,
                    fontWeight: "400",
                    fontSize: 11,
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-500")
                    ),
                  }),
                r
                  .get("renderer")
                  .grid.template.setAll({ disabled: !0, strokeOpacity: 0 });
              var o = a.yAxes.push(
                am5xy.ValueAxis.new(t, {
                  min: 0,
                  extraMax: 0.1,
                  renderer: am5xy.AxisRendererY.new(t, {}),
                })
              );
              o
                .get("renderer")
                .labels.template.setAll({
                  paddingTop: 0,
                  fontWeight: "400",
                  fontSize: 11,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
                }),
                o
                  .get("renderer")
                  .grid.template.setAll({
                    stroke: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-300")
                    ),
                    strokeWidth: 1,
                    strokeOpacity: 1,
                    strokeDasharray: [3],
                  });
              var i = a.series.push(
                am5xy.ColumnSeries.new(t, {
                  name: "Income",
                  xAxis: r,
                  yAxis: o,
                  valueYField: "income",
                  categoryXField: "year",
                  tooltip: am5.Tooltip.new(t, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} in {categoryX}: {valueY} {info}",
                  }),
                })
              );
              i.columns.template.setAll({
                tooltipY: am5.percent(10),
                templateField: "columnSettings",
              }),
                i.data.setAll(l);
              var s = a.series.push(
                am5xy.LineSeries.new(t, {
                  name: "Expenses",
                  xAxis: r,
                  yAxis: o,
                  valueYField: "expenses",
                  categoryXField: "year",
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                  stroke: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                  tooltip: am5.Tooltip.new(t, {
                    pointerOrientation: "horizontal",
                    labelText: "{name} in {categoryX}: {valueY} {info}",
                  }),
                })
              );
              s.strokes.template.setAll({
                stroke: am5.color(KTUtil.getCssVariableValue("--bs-success")),
              }),
                s.strokes.template.setAll({
                  strokeWidth: 3,
                  templateField: "strokeSettings",
                }),
                s.data.setAll(l),
                s.bullets.push(function () {
                  return am5.Bullet.new(t, {
                    sprite: am5.Circle.new(t, {
                      strokeWidth: 3,
                      stroke: am5.color(
                        KTUtil.getCssVariableValue("--bs-success")
                      ),
                      radius: 5,
                      fill: am5.color(
                        KTUtil.getCssVariableValue("--bs-success-light")
                      ),
                    }),
                  });
                }),
                i.columns.template.setAll({
                  strokeOpacity: 0,
                  cornerRadiusBR: 0,
                  cornerRadiusTR: 6,
                  cornerRadiusBL: 0,
                  cornerRadiusTL: 6,
                }),
                a.set("cursor", am5xy.XYCursor.new(t, {})),
                a.get("cursor").lineX.setAll({ visible: !1 }),
                a.get("cursor").lineY.setAll({ visible: !1 });
              var n = a.children.push(
                am5.Legend.new(t, { centerX: am5.p50, x: am5.p50 })
              );
              n.data.setAll(a.series.values),
                n.labels.template.setAll({
                  fontWeight: "600",
                  fontSize: 14,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700")),
                }),
                a.appear(1e3, 100),
                i.appear();
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget23),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget23.init();
  });
var KTChartsWidget24 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_24");
        if (e) {
          var t,
            a = function () {
              var a = [
                  { age: "0 to 5", male: 10175713, female: 9736305 },
                  { age: "5 to 9", male: 10470147, female: 10031835 },
                  { age: "10 to 14", male: 10561873, female: 10117913 },
                  { age: "15 to 17", male: 6447043, female: 6142996 },
                  { age: "18 to 21", male: 9349745, female: 8874664 },
                  { age: "22 to 24", male: 6722248, female: 6422017 },
                  { age: "25 to 29", male: 10989596, female: 10708414 },
                  { age: "30 to 34", male: 10625791, female: 10557848 },
                  { age: "35 to 39", male: 9899569, female: 9956213 },
                  { age: "40 to 44", male: 10330986, female: 10465142 },
                  { age: "45 to 49", male: 10571984, female: 10798384 },
                  { age: "50 to 54", male: 11051409, female: 11474081 },
                  { age: "55 to 59", male: 10173646, female: 10828301 },
                  { age: "60 to 64", male: 8824852, female: 9590829 },
                  { age: "65 to 69", male: 6876271, female: 7671175 },
                  { age: "70 to 74", male: 4867513, female: 5720208 },
                  { age: "75 to 79", male: 3416432, female: 4313697 },
                  { age: "80 to 84", male: 2378691, female: 3432738 },
                  { age: "85 and Older", male: 2000771, female: 3937981 },
                ],
                l = {
                  AK: [
                    { age: "0 to 5", male: 28346, female: 26607 },
                    { age: "10 to 14", male: 26350, female: 24821 },
                    { age: "15 to 17", male: 15929, female: 14735 },
                    { age: "18 to 21", male: 25360, female: 19030 },
                    { age: "22 to 24", male: 20755, female: 15663 },
                    { age: "25 to 29", male: 32415, female: 28259 },
                    { age: "30 to 34", male: 28232, female: 25272 },
                    { age: "35 to 39", male: 24217, female: 22002 },
                    { age: "40 to 44", male: 23429, female: 21968 },
                    { age: "45 to 49", male: 24764, female: 22784 },
                    { age: "5 to 9", male: 26276, female: 25063 },
                    { age: "50 to 54", male: 27623, female: 25503 },
                    { age: "55 to 59", male: 26300, female: 25198 },
                    { age: "60 to 64", male: 21798, female: 18970 },
                    { age: "65 to 69", male: 13758, female: 12899 },
                    { age: "70 to 74", male: 8877, female: 8269 },
                    { age: "75 to 79", male: 4834, female: 4894 },
                    { age: "80 to 84", male: 3015, female: 3758 },
                    { age: "85 and Older", male: 1882, female: 3520 },
                  ],
                  AL: [
                    { age: "0 to 5", male: 150860, female: 144194 },
                    { age: "10 to 14", male: 161596, female: 156841 },
                    { age: "15 to 17", male: 98307, female: 94462 },
                    { age: "18 to 21", male: 142173, female: 136514 },
                    { age: "22 to 24", male: 99164, female: 101444 },
                    { age: "25 to 29", male: 154977, female: 159815 },
                    { age: "30 to 34", male: 150036, female: 156764 },
                    { age: "35 to 39", male: 141667, female: 152220 },
                    { age: "40 to 44", male: 155693, female: 159835 },
                    { age: "45 to 49", male: 156413, female: 163909 },
                    { age: "5 to 9", male: 156380, female: 149334 },
                    { age: "50 to 54", male: 166863, female: 178187 },
                    { age: "55 to 59", male: 156994, female: 169355 },
                    { age: "60 to 64", male: 140659, female: 156638 },
                    { age: "65 to 69", male: 112724, female: 128494 },
                    { age: "70 to 74", male: 79258, female: 96507 },
                    { age: "75 to 79", male: 55122, female: 75371 },
                    { age: "80 to 84", male: 36252, female: 53976 },
                    { age: "85 and Older", male: 25955, female: 55667 },
                  ],
                  AR: [
                    { age: "0 to 5", male: 98246, female: 93534 },
                    { age: "10 to 14", male: 99707, female: 96862 },
                    { age: "15 to 17", male: 60521, female: 57735 },
                    { age: "18 to 21", male: 87209, female: 81936 },
                    { age: "22 to 24", male: 59114, female: 59387 },
                    { age: "25 to 29", male: 96190, female: 96573 },
                    { age: "30 to 34", male: 96273, female: 95632 },
                    { age: "35 to 39", male: 90371, female: 90620 },
                    { age: "40 to 44", male: 91881, female: 93777 },
                    { age: "45 to 49", male: 93238, female: 95476 },
                    { age: "5 to 9", male: 103613, female: 97603 },
                    { age: "50 to 54", male: 98960, female: 102953 },
                    { age: "55 to 59", male: 92133, female: 100676 },
                    { age: "60 to 64", male: 84082, female: 90243 },
                    { age: "65 to 69", male: 70121, female: 76669 },
                    { age: "70 to 74", male: 52154, female: 61686 },
                    { age: "75 to 79", male: 36856, female: 44371 },
                    { age: "80 to 84", male: 23098, female: 35328 },
                    { age: "85 and Older", male: 18146, female: 35234 },
                  ],
                  AZ: [
                    { age: "0 to 5", male: 221511, female: 212324 },
                    { age: "10 to 14", male: 233530, female: 222965 },
                    { age: "15 to 17", male: 138926, female: 132399 },
                    { age: "18 to 21", male: 200240, female: 187786 },
                    { age: "22 to 24", male: 142852, female: 132457 },
                    { age: "25 to 29", male: 231488, female: 215985 },
                    { age: "30 to 34", male: 223754, female: 214946 },
                    { age: "35 to 39", male: 206718, female: 202482 },
                    { age: "40 to 44", male: 213591, female: 210621 },
                    { age: "45 to 49", male: 205830, female: 206081 },
                    { age: "5 to 9", male: 231249, female: 224385 },
                    { age: "50 to 54", male: 210386, female: 218328 },
                    { age: "55 to 59", male: 192614, female: 209767 },
                    { age: "60 to 64", male: 178325, female: 200313 },
                    { age: "65 to 69", male: 155852, female: 174407 },
                    { age: "70 to 74", male: 121878, female: 136840 },
                    { age: "75 to 79", male: 87470, female: 96953 },
                    { age: "80 to 84", male: 58553, female: 69559 },
                    { age: "85 and Older", male: 44321, female: 74242 },
                  ],
                  CA: [
                    { age: "0 to 5", male: 1283763, female: 1228013 },
                    { age: "10 to 14", male: 1297819, female: 1245016 },
                    { age: "15 to 17", male: 811114, female: 773387 },
                    { age: "18 to 21", male: 1179739, female: 1100368 },
                    { age: "22 to 24", male: 883323, female: 825833 },
                    { age: "25 to 29", male: 1478557, female: 1387516 },
                    { age: "30 to 34", male: 1399835, female: 1348430 },
                    { age: "35 to 39", male: 1287803, female: 1271908 },
                    { age: "40 to 44", male: 1308311, female: 1309907 },
                    { age: "45 to 49", male: 1306719, female: 1303528 },
                    { age: "5 to 9", male: 1295030, female: 1240201 },
                    { age: "50 to 54", male: 1305323, female: 1330645 },
                    { age: "55 to 59", male: 1161821, female: 1223440 },
                    { age: "60 to 64", male: 975874, female: 1060921 },
                    { age: "65 to 69", male: 734814, female: 833926 },
                    { age: "70 to 74", male: 515115, female: 604615 },
                    { age: "75 to 79", male: 363282, female: 455568 },
                    { age: "80 to 84", male: 264126, female: 363937 },
                    { age: "85 and Older", male: 234767, female: 427170 },
                  ],
                  CO: [
                    { age: "0 to 5", male: 173245, female: 163629 },
                    { age: "10 to 14", male: 179579, female: 170930 },
                    { age: "15 to 17", male: 102577, female: 98569 },
                    { age: "18 to 21", male: 152713, female: 139268 },
                    { age: "22 to 24", male: 116654, female: 108238 },
                    { age: "25 to 29", male: 204625, female: 188680 },
                    { age: "30 to 34", male: 200624, female: 188616 },
                    { age: "35 to 39", male: 183386, female: 175326 },
                    { age: "40 to 44", male: 184422, female: 173654 },
                    { age: "45 to 49", male: 174730, female: 172981 },
                    { age: "5 to 9", male: 179803, female: 173524 },
                    { age: "50 to 54", male: 183543, female: 187757 },
                    { age: "55 to 59", male: 170717, female: 179537 },
                    { age: "60 to 64", male: 150815, female: 155924 },
                    { age: "65 to 69", male: 111094, female: 119530 },
                    { age: "70 to 74", male: 72252, female: 80168 },
                    { age: "75 to 79", male: 49142, female: 59393 },
                    { age: "80 to 84", male: 31894, female: 43881 },
                    { age: "85 and Older", male: 26852, female: 50634 },
                  ],
                  CT: [
                    { age: "0 to 5", male: 97647, female: 93798 },
                    { age: "10 to 14", male: 118032, female: 113043 },
                    { age: "15 to 17", male: 75546, female: 71687 },
                    { age: "18 to 21", male: 106966, female: 102763 },
                    { age: "22 to 24", male: 71125, female: 64777 },
                    { age: "25 to 29", male: 112189, female: 108170 },
                    { age: "30 to 34", male: 107223, female: 109096 },
                    { age: "35 to 39", male: 102424, female: 106008 },
                    { age: "40 to 44", male: 116664, female: 123744 },
                    { age: "45 to 49", male: 131872, female: 139406 },
                    { age: "5 to 9", male: 110043, female: 104940 },
                    { age: "50 to 54", male: 138644, female: 146532 },
                    { age: "55 to 59", male: 126670, female: 132895 },
                    { age: "60 to 64", male: 104701, female: 114339 },
                    { age: "65 to 69", male: 80178, female: 91052 },
                    { age: "70 to 74", male: 55237, female: 65488 },
                    { age: "75 to 79", male: 38844, female: 51544 },
                    { age: "80 to 84", male: 28908, female: 43036 },
                    { age: "85 and Older", male: 28694, female: 59297 },
                  ],
                  DC: [
                    { age: "0 to 5", male: 20585, female: 19848 },
                    { age: "10 to 14", male: 12723, female: 11991 },
                    { age: "15 to 17", male: 7740, female: 7901 },
                    { age: "18 to 21", male: 22350, female: 25467 },
                    { age: "22 to 24", male: 15325, female: 19085 },
                    { age: "25 to 29", male: 35295, female: 41913 },
                    { age: "30 to 34", male: 32716, female: 35553 },
                    { age: "35 to 39", male: 23748, female: 24922 },
                    { age: "40 to 44", male: 21158, female: 20113 },
                    { age: "45 to 49", male: 19279, female: 18956 },
                    { age: "5 to 9", male: 14999, female: 15518 },
                    { age: "50 to 54", male: 19249, female: 19279 },
                    { age: "55 to 59", male: 17592, female: 18716 },
                    { age: "60 to 64", male: 14272, female: 17892 },
                    { age: "65 to 69", male: 9740, female: 13375 },
                    { age: "70 to 74", male: 8221, female: 9761 },
                    { age: "75 to 79", male: 5071, female: 7601 },
                    { age: "80 to 84", male: 3399, female: 5619 },
                    { age: "85 and Older", male: 3212, female: 7300 },
                  ],
                  DE: [
                    { age: "0 to 5", male: 28382, female: 27430 },
                    { age: "10 to 14", male: 29482, female: 27484 },
                    { age: "15 to 17", male: 17589, female: 16828 },
                    { age: "18 to 21", male: 26852, female: 26911 },
                    { age: "22 to 24", male: 19006, female: 18413 },
                    { age: "25 to 29", male: 30933, female: 31146 },
                    { age: "30 to 34", male: 28602, female: 29431 },
                    { age: "35 to 39", male: 26498, female: 28738 },
                    { age: "40 to 44", male: 27674, female: 28519 },
                    { age: "45 to 49", male: 30582, female: 32924 },
                    { age: "5 to 9", male: 28224, female: 28735 },
                    { age: "50 to 54", male: 32444, female: 35052 },
                    { age: "55 to 59", male: 29048, female: 34377 },
                    { age: "60 to 64", male: 27925, female: 30017 },
                    { age: "65 to 69", male: 22767, female: 26707 },
                    { age: "70 to 74", male: 17121, female: 19327 },
                    { age: "75 to 79", male: 11479, female: 14264 },
                    { age: "80 to 84", male: 7473, female: 10353 },
                    { age: "85 and Older", male: 6332, female: 11385 },
                  ],
                  FL: [
                    { age: "0 to 5", male: 552054, female: 529003 },
                    { age: "10 to 14", male: 582351, female: 558377 },
                    { age: "15 to 17", male: 363538, female: 345048 },
                    { age: "18 to 21", male: 528013, female: 498162 },
                    { age: "22 to 24", male: 385515, female: 368754 },
                    { age: "25 to 29", male: 641710, female: 622134 },
                    { age: "30 to 34", male: 602467, female: 602634 },
                    { age: "35 to 39", male: 579722, female: 585089 },
                    { age: "40 to 44", male: 623074, female: 639410 },
                    { age: "45 to 49", male: 659376, female: 677305 },
                    { age: "5 to 9", male: 567479, female: 543273 },
                    { age: "50 to 54", male: 687625, female: 723103 },
                    { age: "55 to 59", male: 626363, female: 685728 },
                    { age: "60 to 64", male: 566282, female: 651192 },
                    { age: "65 to 69", male: 517513, female: 589377 },
                    { age: "70 to 74", male: 407275, female: 470688 },
                    { age: "75 to 79", male: 305530, female: 361107 },
                    { age: "80 to 84", male: 219362, female: 281016 },
                    { age: "85 and Older", male: 184760, female: 314363 },
                  ],
                  GA: [
                    { age: "0 to 5", male: 338979, female: 326326 },
                    { age: "10 to 14", male: 356404, female: 351833 },
                    { age: "15 to 17", male: 211908, female: 203412 },
                    { age: "18 to 21", male: 305617, female: 289233 },
                    { age: "22 to 24", male: 214032, female: 206526 },
                    { age: "25 to 29", male: 342885, female: 343115 },
                    { age: "30 to 34", male: 333159, female: 348125 },
                    { age: "35 to 39", male: 325121, female: 345251 },
                    { age: "40 to 44", male: 348120, female: 363703 },
                    { age: "45 to 49", male: 343559, female: 358754 },
                    { age: "5 to 9", male: 362147, female: 340071 },
                    { age: "50 to 54", male: 338424, female: 359362 },
                    { age: "55 to 59", male: 294734, female: 325653 },
                    { age: "60 to 64", male: 254497, female: 285276 },
                    { age: "65 to 69", male: 198714, female: 226714 },
                    { age: "70 to 74", male: 135107, female: 164091 },
                    { age: "75 to 79", male: 88135, female: 115830 },
                    { age: "80 to 84", male: 53792, female: 84961 },
                    { age: "85 and Older", male: 37997, female: 85126 },
                  ],
                  HI: [
                    { age: "0 to 5", male: 46668, female: 44389 },
                    { age: "10 to 14", male: 42590, female: 41289 },
                    { age: "15 to 17", male: 24759, female: 23961 },
                    { age: "18 to 21", male: 39937, female: 32348 },
                    { age: "22 to 24", male: 35270, female: 28495 },
                    { age: "25 to 29", male: 58033, female: 48700 },
                    { age: "30 to 34", male: 51544, female: 47286 },
                    { age: "35 to 39", male: 44144, female: 42208 },
                    { age: "40 to 44", male: 45731, female: 43404 },
                    { age: "45 to 49", male: 44336, female: 44134 },
                    { age: "5 to 9", male: 44115, female: 40426 },
                    { age: "50 to 54", male: 46481, female: 46908 },
                    { age: "55 to 59", male: 45959, female: 47379 },
                    { age: "60 to 64", male: 42420, female: 43735 },
                    { age: "65 to 69", male: 34846, female: 36670 },
                    { age: "70 to 74", male: 22981, female: 25496 },
                    { age: "75 to 79", male: 15219, female: 18755 },
                    { age: "80 to 84", male: 11142, female: 17952 },
                    { age: "85 and Older", male: 13696, female: 22893 },
                  ],
                  IA: [
                    { age: "0 to 5", male: 100400, female: 96170 },
                    { age: "10 to 14", male: 104674, female: 98485 },
                    { age: "15 to 17", male: 62452, female: 59605 },
                    { age: "18 to 21", male: 96966, female: 91782 },
                    { age: "22 to 24", male: 66307, female: 62504 },
                    { age: "25 to 29", male: 98079, female: 93653 },
                    { age: "30 to 34", male: 100924, female: 97248 },
                    { age: "35 to 39", male: 90980, female: 89632 },
                    { age: "40 to 44", male: 92961, female: 90218 },
                    { age: "45 to 49", male: 98877, female: 96654 },
                    { age: "5 to 9", male: 104279, female: 100558 },
                    { age: "50 to 54", male: 109267, female: 110142 },
                    { age: "55 to 59", male: 104021, female: 106042 },
                    { age: "60 to 64", male: 95379, female: 95499 },
                    { age: "65 to 69", male: 68276, female: 73624 },
                    { age: "70 to 74", male: 50414, female: 56973 },
                    { age: "75 to 79", male: 37867, female: 48121 },
                    { age: "80 to 84", male: 27523, female: 39851 },
                    { age: "85 and Older", male: 24949, female: 52170 },
                  ],
                  ID: [
                    { age: "0 to 5", male: 58355, female: 56478 },
                    { age: "10 to 14", male: 62528, female: 59881 },
                    { age: "15 to 17", male: 36373, female: 33687 },
                    { age: "18 to 21", male: 45752, female: 45590 },
                    { age: "22 to 24", male: 34595, female: 30216 },
                    { age: "25 to 29", male: 53998, female: 52077 },
                    { age: "30 to 34", male: 54217, female: 52091 },
                    { age: "35 to 39", male: 51247, female: 47801 },
                    { age: "40 to 44", male: 49113, female: 49853 },
                    { age: "45 to 49", male: 48392, female: 48288 },
                    { age: "5 to 9", male: 63107, female: 59237 },
                    { age: "50 to 54", male: 51805, female: 52984 },
                    { age: "55 to 59", male: 49226, female: 51868 },
                    { age: "60 to 64", male: 47343, female: 47631 },
                    { age: "65 to 69", male: 38436, female: 38133 },
                    { age: "70 to 74", male: 26243, female: 28577 },
                    { age: "75 to 79", male: 18404, female: 20325 },
                    { age: "80 to 84", male: 11653, female: 15313 },
                    { age: "85 and Older", male: 9677, female: 16053 },
                  ],
                  IL: [
                    { age: "0 to 5", male: 408295, female: 392900 },
                    { age: "10 to 14", male: 437688, female: 419077 },
                    { age: "15 to 17", male: 269202, female: 257213 },
                    { age: "18 to 21", male: 369219, female: 353570 },
                    { age: "22 to 24", male: 268501, female: 258559 },
                    { age: "25 to 29", male: 448001, female: 442418 },
                    { age: "30 to 34", male: 445416, female: 445729 },
                    { age: "35 to 39", male: 416265, female: 418999 },
                    { age: "40 to 44", male: 425825, female: 427573 },
                    { age: "45 to 49", male: 433177, female: 441116 },
                    { age: "5 to 9", male: 427121, female: 412238 },
                    { age: "50 to 54", male: 454039, female: 470982 },
                    { age: "55 to 59", male: 414948, female: 442280 },
                    { age: "60 to 64", male: 354782, female: 380640 },
                    { age: "65 to 69", male: 259363, female: 292899 },
                    { age: "70 to 74", male: 184622, female: 223905 },
                    { age: "75 to 79", male: 129016, female: 171743 },
                    { age: "80 to 84", male: 91973, female: 139204 },
                    { age: "85 and Older", male: 79446, female: 165817 },
                  ],
                  IN: [
                    { age: "0 to 5", male: 215697, female: 205242 },
                    { age: "10 to 14", male: 229911, female: 221563 },
                    { age: "15 to 17", male: 139494, female: 132879 },
                    { age: "18 to 21", male: 198763, female: 194206 },
                    { age: "22 to 24", male: 140805, female: 131947 },
                    { age: "25 to 29", male: 210315, female: 208593 },
                    { age: "30 to 34", male: 211656, female: 210103 },
                    { age: "35 to 39", male: 201979, female: 200693 },
                    { age: "40 to 44", male: 212114, female: 212653 },
                    { age: "45 to 49", male: 216446, female: 219033 },
                    { age: "5 to 9", male: 226901, female: 214964 },
                    { age: "50 to 54", male: 232241, female: 237844 },
                    { age: "55 to 59", male: 217033, female: 228674 },
                    { age: "60 to 64", male: 186412, female: 197353 },
                    { age: "65 to 69", male: 140336, female: 156256 },
                    { age: "70 to 74", male: 99402, female: 116834 },
                    { age: "75 to 79", male: 68758, female: 88794 },
                    { age: "80 to 84", male: 47628, female: 72061 },
                    { age: "85 and Older", male: 39372, female: 83690 },
                  ],
                  KS: [
                    { age: "0 to 5", male: 102716, female: 98004 },
                    { age: "10 to 14", male: 102335, female: 99132 },
                    { age: "15 to 17", male: 60870, female: 57957 },
                    { age: "18 to 21", male: 90593, female: 83299 },
                    { age: "22 to 24", male: 66512, female: 59368 },
                    { age: "25 to 29", male: 99384, female: 93840 },
                    { age: "30 to 34", male: 98020, female: 94075 },
                    { age: "35 to 39", male: 87763, female: 85422 },
                    { age: "40 to 44", male: 87647, female: 84970 },
                    { age: "45 to 49", male: 89233, female: 88877 },
                    { age: "5 to 9", male: 103861, female: 98642 },
                    { age: "50 to 54", male: 98398, female: 101197 },
                    { age: "55 to 59", male: 95861, female: 96152 },
                    { age: "60 to 64", male: 79440, female: 85124 },
                    { age: "65 to 69", male: 60035, female: 64369 },
                    { age: "70 to 74", male: 42434, female: 49221 },
                    { age: "75 to 79", male: 30967, female: 39425 },
                    { age: "80 to 84", male: 23026, female: 33863 },
                    { age: "85 and Older", male: 20767, female: 40188 },
                  ],
                  KY: [
                    { age: "0 to 5", male: 142062, female: 134389 },
                    { age: "10 to 14", male: 147586, female: 138629 },
                    { age: "15 to 17", male: 87696, female: 83139 },
                    { age: "18 to 21", male: 128249, female: 121099 },
                    { age: "22 to 24", male: 90794, female: 85930 },
                    { age: "25 to 29", male: 140811, female: 139855 },
                    { age: "30 to 34", male: 142732, female: 142551 },
                    { age: "35 to 39", male: 137211, female: 136524 },
                    { age: "40 to 44", male: 145358, female: 145251 },
                    { age: "45 to 49", male: 148883, female: 150922 },
                    { age: "5 to 9", male: 143532, female: 139032 },
                    { age: "50 to 54", male: 156890, female: 163054 },
                    { age: "55 to 59", male: 147006, female: 156302 },
                    { age: "60 to 64", male: 129457, female: 139434 },
                    { age: "65 to 69", male: 100883, female: 112696 },
                    { age: "70 to 74", male: 71867, female: 83665 },
                    { age: "75 to 79", male: 47828, female: 62775 },
                    { age: "80 to 84", male: 31477, female: 46386 },
                    { age: "85 and Older", male: 23886, female: 51512 },
                  ],
                  LA: [
                    { age: "0 to 5", male: 157642, female: 152324 },
                    { age: "10 to 14", male: 157781, female: 149752 },
                    { age: "15 to 17", male: 93357, female: 90227 },
                    { age: "18 to 21", male: 136496, female: 131202 },
                    { age: "22 to 24", male: 101438, female: 101480 },
                    { age: "25 to 29", male: 167414, female: 168886 },
                    { age: "30 to 34", male: 160094, female: 161424 },
                    { age: "35 to 39", male: 142182, female: 141813 },
                    { age: "40 to 44", male: 138717, female: 144789 },
                    { age: "45 to 49", male: 145906, female: 152340 },
                    { age: "5 to 9", male: 159193, female: 154320 },
                    { age: "50 to 54", male: 157743, female: 167125 },
                    { age: "55 to 59", male: 149001, female: 161295 },
                    { age: "60 to 64", male: 129265, female: 139378 },
                    { age: "65 to 69", male: 98404, female: 106844 },
                    { age: "70 to 74", male: 65845, female: 83779 },
                    { age: "75 to 79", male: 47365, female: 60745 },
                    { age: "80 to 84", male: 29452, female: 48839 },
                    { age: "85 and Older", male: 23861, female: 47535 },
                  ],
                  MA: [
                    { age: "0 to 5", male: 187066, female: 178775 },
                    { age: "10 to 14", male: 205530, female: 195312 },
                    { age: "15 to 17", male: 129433, female: 123212 },
                    { age: "18 to 21", male: 207432, female: 213820 },
                    { age: "22 to 24", male: 140356, female: 135839 },
                    { age: "25 to 29", male: 235172, female: 237653 },
                    { age: "30 to 34", male: 216220, female: 221692 },
                    { age: "35 to 39", male: 196293, female: 202730 },
                    { age: "40 to 44", male: 218111, female: 231277 },
                    { age: "45 to 49", male: 237629, female: 249926 },
                    { age: "5 to 9", male: 191958, female: 186343 },
                    { age: "50 to 54", male: 247973, female: 260886 },
                    { age: "55 to 59", male: 227238, female: 241029 },
                    { age: "60 to 64", male: 189981, female: 211282 },
                    { age: "65 to 69", male: 146129, female: 164268 },
                    { age: "70 to 74", male: 100745, female: 123577 },
                    { age: "75 to 79", male: 70828, female: 92141 },
                    { age: "80 to 84", male: 52074, female: 81603 },
                    { age: "85 and Older", male: 49482, female: 104571 },
                  ],
                  MD: [
                    { age: "0 to 5", male: 187617, female: 180105 },
                    { age: "10 to 14", male: 191787, female: 185380 },
                    { age: "15 to 17", male: 118027, female: 113549 },
                    { age: "18 to 21", male: 166991, female: 159589 },
                    { age: "22 to 24", male: 120617, female: 116602 },
                    { age: "25 to 29", male: 205555, female: 206944 },
                    { age: "30 to 34", male: 196824, female: 203989 },
                    { age: "35 to 39", male: 179340, female: 193957 },
                    { age: "40 to 44", male: 195388, female: 205570 },
                    { age: "45 to 49", male: 208382, female: 225458 },
                    { age: "5 to 9", male: 189781, female: 182034 },
                    { age: "50 to 54", male: 217574, female: 235604 },
                    { age: "55 to 59", male: 193789, female: 210582 },
                    { age: "60 to 64", male: 161828, female: 186524 },
                    { age: "65 to 69", male: 123204, female: 144193 },
                    { age: "70 to 74", male: 84114, female: 101563 },
                    { age: "75 to 79", male: 56755, female: 75715 },
                    { age: "80 to 84", male: 39615, female: 59728 },
                    { age: "85 and Older", male: 35455, female: 70809 },
                  ],
                  ME: [
                    { age: "0 to 5", male: 33298, female: 32108 },
                    { age: "10 to 14", male: 38254, female: 36846 },
                    { age: "15 to 17", male: 24842, female: 23688 },
                    { age: "18 to 21", male: 35315, female: 33777 },
                    { age: "22 to 24", male: 23007, female: 21971 },
                    { age: "25 to 29", male: 37685, female: 38353 },
                    { age: "30 to 34", male: 36838, female: 37697 },
                    { age: "35 to 39", male: 35988, female: 37686 },
                    { age: "40 to 44", male: 42092, female: 42912 },
                    { age: "45 to 49", male: 47141, female: 49161 },
                    { age: "5 to 9", male: 38066, female: 35151 },
                    { age: "50 to 54", male: 53458, female: 55451 },
                    { age: "55 to 59", male: 51789, female: 55407 },
                    { age: "60 to 64", male: 47171, female: 49840 },
                    { age: "65 to 69", male: 37495, female: 39678 },
                    { age: "70 to 74", male: 26300, female: 28932 },
                    { age: "75 to 79", male: 18197, female: 22047 },
                    { age: "80 to 84", male: 12824, female: 18302 },
                    { age: "85 and Older", male: 10321, female: 20012 },
                  ],
                  MI: [
                    { age: "0 to 5", male: 295157, female: 280629 },
                    { age: "10 to 14", male: 329983, female: 319870 },
                    { age: "15 to 17", male: 210017, female: 199977 },
                    { age: "18 to 21", male: 299937, female: 287188 },
                    { age: "22 to 24", male: 208270, female: 202858 },
                    { age: "25 to 29", male: 303606, female: 298013 },
                    { age: "30 to 34", male: 292780, female: 296303 },
                    { age: "35 to 39", male: 283925, female: 288526 },
                    { age: "40 to 44", male: 314544, female: 319923 },
                    { age: "45 to 49", male: 337524, female: 344097 },
                    { age: "5 to 9", male: 316345, female: 297675 },
                    { age: "50 to 54", male: 366054, female: 378332 },
                    { age: "55 to 59", male: 349590, female: 369347 },
                    { age: "60 to 64", male: 303421, female: 323815 },
                    { age: "65 to 69", male: 230810, female: 252455 },
                    { age: "70 to 74", male: 161676, female: 186453 },
                    { age: "75 to 79", male: 112555, female: 141554 },
                    { age: "80 to 84", male: 78669, female: 116914 },
                    { age: "85 and Older", male: 67110, female: 134669 },
                  ],
                  MN: [
                    { age: "0 to 5", male: 178616, female: 170645 },
                    { age: "10 to 14", male: 180951, female: 174374 },
                    { age: "15 to 17", male: 110001, female: 104197 },
                    { age: "18 to 21", male: 148247, female: 144611 },
                    { age: "22 to 24", male: 108864, female: 103755 },
                    { age: "25 to 29", male: 185766, female: 180698 },
                    { age: "30 to 34", male: 189374, female: 184845 },
                    { age: "35 to 39", male: 166613, female: 160534 },
                    { age: "40 to 44", male: 172583, female: 171011 },
                    { age: "45 to 49", male: 184130, female: 182785 },
                    { age: "5 to 9", male: 185244, female: 176674 },
                    { age: "50 to 54", male: 202427, female: 203327 },
                    { age: "55 to 59", male: 187216, female: 189980 },
                    { age: "60 to 64", male: 157586, female: 160588 },
                    { age: "65 to 69", male: 114903, female: 121985 },
                    { age: "70 to 74", male: 81660, female: 92401 },
                    { age: "75 to 79", male: 57855, female: 72839 },
                    { age: "80 to 84", male: 42192, female: 58545 },
                    { age: "85 and Older", male: 37938, female: 73211 },
                  ],
                  MO: [
                    { age: "0 to 5", male: 192851, female: 183921 },
                    { age: "10 to 14", male: 201273, female: 190020 },
                    { age: "15 to 17", male: 122944, female: 116383 },
                    { age: "18 to 21", male: 175782, female: 169076 },
                    { age: "22 to 24", male: 124584, female: 123027 },
                    { age: "25 to 29", male: 200511, female: 200134 },
                    { age: "30 to 34", male: 197781, female: 198735 },
                    { age: "35 to 39", male: 181485, female: 180002 },
                    { age: "40 to 44", male: 183318, female: 188038 },
                    { age: "45 to 49", male: 194538, female: 199735 },
                    { age: "5 to 9", male: 200091, female: 193196 },
                    { age: "50 to 54", male: 218663, female: 225083 },
                    { age: "55 to 59", male: 199513, female: 216459 },
                    { age: "60 to 64", male: 176036, female: 187668 },
                    { age: "65 to 69", male: 135605, female: 150815 },
                    { age: "70 to 74", male: 99845, female: 117802 },
                    { age: "75 to 79", male: 70734, female: 88769 },
                    { age: "80 to 84", male: 48118, female: 72085 },
                    { age: "85 and Older", male: 40331, female: 80497 },
                  ],
                  MS: [
                    { age: "0 to 5", male: 100654, female: 97079 },
                    { age: "10 to 14", male: 107363, female: 101958 },
                    { age: "15 to 17", male: 62923, female: 60591 },
                    { age: "18 to 21", male: 94460, female: 94304 },
                    { age: "22 to 24", male: 63870, female: 58909 },
                    { age: "25 to 29", male: 96027, female: 98023 },
                    { age: "30 to 34", male: 95533, female: 98837 },
                    { age: "35 to 39", male: 88278, female: 92876 },
                    { age: "40 to 44", male: 93579, female: 97851 },
                    { age: "45 to 49", male: 92103, female: 98871 },
                    { age: "5 to 9", male: 104911, female: 100694 },
                    { age: "50 to 54", male: 98578, female: 106516 },
                    { age: "55 to 59", male: 94835, female: 101616 },
                    { age: "60 to 64", male: 80677, female: 91332 },
                    { age: "65 to 69", male: 64386, female: 72940 },
                    { age: "70 to 74", male: 46712, female: 56013 },
                    { age: "75 to 79", male: 32079, female: 42598 },
                    { age: "80 to 84", male: 19966, female: 32724 },
                    { age: "85 and Older", male: 14789, female: 32626 },
                  ],
                  MT: [
                    { age: "0 to 5", male: 31021, female: 29676 },
                    { age: "10 to 14", male: 30960, female: 29710 },
                    { age: "15 to 17", male: 19558, female: 18061 },
                    { age: "18 to 21", male: 30975, female: 27314 },
                    { age: "22 to 24", male: 21419, female: 20153 },
                    { age: "25 to 29", male: 32300, female: 30805 },
                    { age: "30 to 34", male: 33167, female: 30964 },
                    { age: "35 to 39", male: 29772, female: 28999 },
                    { age: "40 to 44", male: 28538, female: 27311 },
                    { age: "45 to 49", male: 30820, female: 30608 },
                    { age: "5 to 9", male: 33641, female: 31763 },
                    { age: "50 to 54", male: 36761, female: 37476 },
                    { age: "55 to 59", male: 38291, female: 40028 },
                    { age: "60 to 64", male: 35306, female: 35021 },
                    { age: "65 to 69", male: 27786, female: 27047 },
                    { age: "70 to 74", male: 19708, female: 19938 },
                    { age: "75 to 79", male: 13344, female: 14751 },
                    { age: "80 to 84", male: 9435, female: 11392 },
                    { age: "85 and Older", male: 7361, female: 13519 },
                  ],
                  NC: [
                    { age: "0 to 5", male: 311288, female: 299882 },
                    { age: "10 to 14", male: 333622, female: 316123 },
                    { age: "15 to 17", male: 194507, female: 185872 },
                    { age: "18 to 21", male: 299506, female: 275504 },
                    { age: "22 to 24", male: 207910, female: 196277 },
                    { age: "25 to 29", male: 317709, female: 324593 },
                    { age: "30 to 34", male: 311582, female: 323483 },
                    { age: "35 to 39", male: 308195, female: 319405 },
                    { age: "40 to 44", male: 334818, female: 349484 },
                    { age: "45 to 49", male: 331086, female: 345940 },
                    { age: "5 to 9", male: 325977, female: 316564 },
                    { age: "50 to 54", male: 334674, female: 355791 },
                    { age: "55 to 59", male: 308840, female: 341170 },
                    { age: "60 to 64", male: 270508, female: 303831 },
                    { age: "65 to 69", male: 225997, female: 254521 },
                    { age: "70 to 74", male: 154010, female: 186677 },
                    { age: "75 to 79", male: 106165, female: 139937 },
                    { age: "80 to 84", male: 68871, female: 104839 },
                    { age: "85 and Older", male: 50143, female: 110032 },
                  ],
                  ND: [
                    { age: "0 to 5", male: 24524, female: 24340 },
                    { age: "10 to 14", male: 20939, female: 20728 },
                    { age: "15 to 17", male: 13197, female: 12227 },
                    { age: "18 to 21", male: 27439, female: 22447 },
                    { age: "22 to 24", male: 21413, female: 19299 },
                    { age: "25 to 29", male: 29543, female: 24602 },
                    { age: "30 to 34", male: 26425, female: 22798 },
                    { age: "35 to 39", male: 21846, female: 19046 },
                    { age: "40 to 44", male: 20123, female: 19010 },
                    { age: "45 to 49", male: 21386, female: 20572 },
                    { age: "5 to 9", male: 24336, female: 22721 },
                    { age: "50 to 54", male: 25126, female: 24631 },
                    { age: "55 to 59", male: 24412, female: 24022 },
                    { age: "60 to 64", male: 21598, female: 20250 },
                    { age: "65 to 69", male: 14868, female: 14633 },
                    { age: "70 to 74", male: 10729, female: 11878 },
                    { age: "75 to 79", male: 8086, female: 9626 },
                    { age: "80 to 84", male: 6222, female: 9241 },
                    { age: "85 and Older", male: 5751, female: 11606 },
                  ],
                  NE: [
                    { age: "0 to 5", male: 67062, female: 62974 },
                    { age: "10 to 14", male: 64843, female: 62695 },
                    { age: "15 to 17", male: 38679, female: 36116 },
                    { age: "18 to 21", male: 56143, female: 54195 },
                    { age: "22 to 24", male: 40531, female: 38139 },
                    { age: "25 to 29", male: 64277, female: 61028 },
                    { age: "30 to 34", male: 64230, female: 62423 },
                    { age: "35 to 39", male: 57741, female: 55950 },
                    { age: "40 to 44", male: 56139, female: 54518 },
                    { age: "45 to 49", male: 57526, female: 57077 },
                    { age: "5 to 9", male: 68079, female: 64509 },
                    { age: "50 to 54", male: 64444, female: 65106 },
                    { age: "55 to 59", male: 61285, female: 62057 },
                    { age: "60 to 64", male: 52560, female: 54977 },
                    { age: "65 to 69", male: 39372, female: 41007 },
                    { age: "70 to 74", male: 27091, female: 31903 },
                    { age: "75 to 79", male: 20472, female: 26808 },
                    { age: "80 to 84", male: 15625, female: 21401 },
                    { age: "85 and Older", male: 13507, female: 26876 },
                  ],
                  NH: [
                    { age: "0 to 5", male: 33531, female: 32061 },
                    { age: "10 to 14", male: 40472, female: 39574 },
                    { age: "15 to 17", male: 26632, female: 25155 },
                    { age: "18 to 21", male: 39600, female: 39270 },
                    { age: "22 to 24", male: 25067, female: 23439 },
                    { age: "25 to 29", male: 39514, female: 37529 },
                    { age: "30 to 34", male: 37282, female: 37104 },
                    { age: "35 to 39", male: 37177, female: 38432 },
                    { age: "40 to 44", male: 43571, female: 43894 },
                    { age: "45 to 49", male: 50559, female: 51423 },
                    { age: "5 to 9", male: 37873, female: 36382 },
                    { age: "50 to 54", male: 55573, female: 57097 },
                    { age: "55 to 59", male: 50802, female: 52906 },
                    { age: "60 to 64", male: 44934, female: 45384 },
                    { age: "65 to 69", male: 33322, female: 34773 },
                    { age: "70 to 74", male: 22786, female: 25421 },
                    { age: "75 to 79", male: 14988, female: 18865 },
                    { age: "80 to 84", male: 10661, female: 14921 },
                    { age: "85 and Older", male: 9140, female: 17087 },
                  ],
                  NJ: [
                    { age: "0 to 5", male: 272239, female: 261405 },
                    { age: "10 to 14", male: 296798, female: 281395 },
                    { age: "15 to 17", male: 183608, female: 174902 },
                    { age: "18 to 21", male: 236406, female: 219234 },
                    { age: "22 to 24", male: 171414, female: 162551 },
                    { age: "25 to 29", male: 288078, female: 278395 },
                    { age: "30 to 34", male: 286242, female: 288661 },
                    { age: "35 to 39", male: 278323, female: 286407 },
                    { age: "40 to 44", male: 306371, female: 315976 },
                    { age: "45 to 49", male: 324604, female: 340805 },
                    { age: "5 to 9", male: 280348, female: 272618 },
                    { age: "50 to 54", male: 335379, female: 351753 },
                    { age: "55 to 59", male: 297889, female: 316509 },
                    { age: "60 to 64", male: 243909, female: 272971 },
                    { age: "65 to 69", male: 187928, female: 216233 },
                    { age: "70 to 74", male: 130458, female: 162862 },
                    { age: "75 to 79", male: 92629, female: 121544 },
                    { age: "80 to 84", male: 68009, female: 107002 },
                    { age: "85 and Older", male: 62395, female: 130163 },
                  ],
                  NM: [
                    { age: "0 to 5", male: 70556, female: 67433 },
                    { age: "10 to 14", male: 72070, female: 69774 },
                    { age: "15 to 17", male: 42831, female: 41474 },
                    { age: "18 to 21", male: 61671, female: 59289 },
                    { age: "22 to 24", male: 47139, female: 41506 },
                    { age: "25 to 29", male: 73009, female: 67866 },
                    { age: "30 to 34", male: 69394, female: 66383 },
                    { age: "35 to 39", male: 62108, female: 60810 },
                    { age: "40 to 44", male: 61075, female: 61508 },
                    { age: "45 to 49", male: 62327, female: 64988 },
                    { age: "5 to 9", male: 72877, female: 69675 },
                    { age: "50 to 54", male: 69856, female: 73683 },
                    { age: "55 to 59", male: 66381, female: 73952 },
                    { age: "60 to 64", male: 61719, female: 66285 },
                    { age: "65 to 69", male: 48657, female: 54175 },
                    { age: "70 to 74", male: 35942, female: 39668 },
                    { age: "75 to 79", male: 24922, female: 29968 },
                    { age: "80 to 84", male: 16894, female: 21049 },
                    { age: "85 and Older", male: 12986, female: 22217 },
                  ],
                  NV: [
                    { age: "0 to 5", male: 91556, female: 87252 },
                    { age: "10 to 14", male: 92376, female: 90127 },
                    { age: "15 to 17", male: 56635, female: 53976 },
                    { age: "18 to 21", male: 72185, female: 68570 },
                    { age: "22 to 24", male: 57429, female: 54635 },
                    { age: "25 to 29", male: 103079, female: 98260 },
                    { age: "30 to 34", male: 101626, female: 97574 },
                    { age: "35 to 39", male: 95952, female: 91752 },
                    { age: "40 to 44", male: 98405, female: 96018 },
                    { age: "45 to 49", male: 98297, female: 92880 },
                    { age: "5 to 9", male: 97639, female: 92019 },
                    { age: "50 to 54", male: 96647, female: 93838 },
                    { age: "55 to 59", male: 86430, female: 90916 },
                    { age: "60 to 64", male: 79651, female: 82206 },
                    { age: "65 to 69", male: 65973, female: 70582 },
                    { age: "70 to 74", male: 48879, female: 50485 },
                    { age: "75 to 79", male: 31798, female: 33652 },
                    { age: "80 to 84", male: 19722, female: 23399 },
                    { age: "85 and Older", male: 13456, female: 22760 },
                  ],
                  NY: [
                    { age: "0 to 5", male: 601900, female: 574532 },
                    { age: "10 to 14", male: 602877, female: 576846 },
                    { age: "15 to 17", male: 381224, female: 364149 },
                    { age: "18 to 21", male: 579276, female: 563517 },
                    { age: "22 to 24", male: 423461, female: 419351 },
                    { age: "25 to 29", male: 722290, female: 728064 },
                    { age: "30 to 34", male: 668918, female: 684340 },
                    { age: "35 to 39", male: 607495, female: 628810 },
                    { age: "40 to 44", male: 632186, female: 660306 },
                    { age: "45 to 49", male: 674516, female: 708960 },
                    { age: "5 to 9", male: 588624, female: 561622 },
                    { age: "50 to 54", male: 695357, female: 740342 },
                    { age: "55 to 59", male: 633602, female: 685163 },
                    { age: "60 to 64", male: 540901, female: 604110 },
                    { age: "65 to 69", male: 409399, female: 483158 },
                    { age: "70 to 74", male: 287440, female: 357971 },
                    { age: "75 to 79", male: 207495, female: 274626 },
                    { age: "80 to 84", male: 150642, female: 231063 },
                    { age: "85 and Older", male: 134198, female: 284443 },
                  ],
                  OH: [
                    { age: "0 to 5", male: 356598, female: 339398 },
                    { age: "10 to 14", male: 385542, female: 371142 },
                    { age: "15 to 17", male: 239825, female: 228296 },
                    { age: "18 to 21", male: 331115, female: 318019 },
                    { age: "22 to 24", male: 227916, female: 225400 },
                    { age: "25 to 29", male: 369646, female: 367475 },
                    { age: "30 to 34", male: 356757, female: 359375 },
                    { age: "35 to 39", male: 338273, female: 340410 },
                    { age: "40 to 44", male: 368578, female: 375476 },
                    { age: "45 to 49", male: 385388, female: 394341 },
                    { age: "5 to 9", male: 376976, female: 358242 },
                    { age: "50 to 54", male: 420561, female: 438290 },
                    { age: "55 to 59", male: 403067, female: 427137 },
                    { age: "60 to 64", male: 350563, female: 374890 },
                    { age: "65 to 69", male: 262844, female: 292745 },
                    { age: "70 to 74", male: 183419, female: 222552 },
                    { age: "75 to 79", male: 131940, female: 173303 },
                    { age: "80 to 84", male: 93267, female: 140079 },
                    { age: "85 and Older", male: 80618, female: 166514 },
                  ],
                  OK: [
                    { age: "0 to 5", male: 135423, female: 130297 },
                    { age: "10 to 14", male: 133539, female: 128110 },
                    { age: "15 to 17", male: 79207, female: 74080 },
                    { age: "18 to 21", male: 115423, female: 107651 },
                    { age: "22 to 24", male: 85610, female: 80749 },
                    { age: "25 to 29", male: 135217, female: 130966 },
                    { age: "30 to 34", male: 132683, female: 128496 },
                    { age: "35 to 39", male: 118240, female: 116104 },
                    { age: "40 to 44", male: 118534, female: 117501 },
                    { age: "45 to 49", male: 117065, female: 118300 },
                    { age: "5 to 9", male: 137212, female: 130040 },
                    { age: "50 to 54", male: 129964, female: 132941 },
                    { age: "55 to 59", male: 121988, female: 129033 },
                    { age: "60 to 64", male: 105018, female: 113144 },
                    { age: "65 to 69", male: 82818, female: 93914 },
                    { age: "70 to 74", male: 62979, female: 71856 },
                    { age: "75 to 79", male: 43899, female: 54848 },
                    { age: "80 to 84", male: 29237, female: 42044 },
                    { age: "85 and Older", male: 22888, female: 42715 },
                  ],
                  OR: [
                    { age: "0 to 5", male: 118561, female: 112841 },
                    { age: "10 to 14", male: 123223, female: 116373 },
                    { age: "15 to 17", male: 75620, female: 71764 },
                    { age: "18 to 21", male: 106121, female: 103044 },
                    { age: "22 to 24", male: 79106, female: 75639 },
                    { age: "25 to 29", male: 134241, female: 131539 },
                    { age: "30 to 34", male: 137090, female: 135734 },
                    { age: "35 to 39", male: 128812, female: 126071 },
                    { age: "40 to 44", male: 131405, female: 126875 },
                    { age: "45 to 49", male: 125373, female: 125074 },
                    { age: "5 to 9", male: 122920, female: 119049 },
                    { age: "50 to 54", male: 131932, female: 137021 },
                    { age: "55 to 59", male: 130434, female: 141380 },
                    { age: "60 to 64", male: 129063, female: 136051 },
                    { age: "65 to 69", male: 99577, female: 106208 },
                    { age: "70 to 74", male: 69028, female: 77428 },
                    { age: "75 to 79", male: 46055, female: 53682 },
                    { age: "80 to 84", male: 30900, female: 41853 },
                    { age: "85 and Older", male: 28992, female: 53154 },
                  ],
                  PA: [
                    { age: "0 to 5", male: 367290, female: 350371 },
                    { age: "10 to 14", male: 393719, female: 374666 },
                    { age: "15 to 17", male: 250754, female: 236670 },
                    { age: "18 to 21", male: 378940, female: 369819 },
                    { age: "22 to 24", male: 251063, female: 243391 },
                    { age: "25 to 29", male: 420247, female: 410193 },
                    { age: "30 to 34", male: 391190, female: 387225 },
                    { age: "35 to 39", male: 365742, female: 365646 },
                    { age: "40 to 44", male: 399152, female: 405848 },
                    { age: "45 to 49", male: 435250, female: 446328 },
                    { age: "5 to 9", male: 381910, female: 366854 },
                    { age: "50 to 54", male: 472070, female: 489057 },
                    { age: "55 to 59", male: 456215, female: 475044 },
                    { age: "60 to 64", male: 390595, female: 419924 },
                    { age: "65 to 69", male: 301610, female: 335127 },
                    { age: "70 to 74", male: 212200, female: 256188 },
                    { age: "75 to 79", male: 156335, female: 205974 },
                    { age: "80 to 84", male: 117050, female: 178358 },
                    { age: "85 and Older", male: 104012, female: 217532 },
                  ],
                  RI: [
                    { age: "0 to 5", male: 28289, female: 26941 },
                    { age: "10 to 14", male: 31383, female: 30724 },
                    { age: "15 to 17", male: 20093, female: 19249 },
                    { age: "18 to 21", male: 35376, female: 37870 },
                    { age: "22 to 24", male: 23397, female: 21358 },
                    { age: "25 to 29", male: 35958, female: 34710 },
                    { age: "30 to 34", male: 32410, female: 32567 },
                    { age: "35 to 39", male: 30325, female: 31145 },
                    { age: "40 to 44", male: 32542, female: 34087 },
                    { age: "45 to 49", male: 36151, female: 38462 },
                    { age: "5 to 9", male: 30462, female: 27878 },
                    { age: "50 to 54", male: 38419, female: 41642 },
                    { age: "55 to 59", male: 36706, female: 39127 },
                    { age: "60 to 64", male: 30349, female: 33752 },
                    { age: "65 to 69", male: 23462, female: 26311 },
                    { age: "70 to 74", male: 16385, female: 19335 },
                    { age: "75 to 79", male: 10978, female: 14833 },
                    { age: "80 to 84", male: 9224, female: 13439 },
                    { age: "85 and Older", male: 8479, female: 19843 },
                  ],
                  SC: [
                    { age: "0 to 5", male: 148363, female: 144218 },
                    { age: "10 to 14", male: 153051, female: 148064 },
                    { age: "15 to 17", male: 92781, female: 88090 },
                    { age: "18 to 21", male: 150464, female: 136857 },
                    { age: "22 to 24", male: 99237, female: 99178 },
                    { age: "25 to 29", male: 156273, female: 156982 },
                    { age: "30 to 34", male: 148237, female: 153197 },
                    { age: "35 to 39", male: 139949, female: 146281 },
                    { age: "40 to 44", male: 151524, female: 157192 },
                    { age: "45 to 49", male: 153110, female: 163562 },
                    { age: "5 to 9", male: 156323, female: 150943 },
                    { age: "50 to 54", male: 161003, female: 173752 },
                    { age: "55 to 59", male: 150770, female: 169238 },
                    { age: "60 to 64", male: 141268, female: 160890 },
                    { age: "65 to 69", male: 120618, female: 137154 },
                    { age: "70 to 74", male: 85197, female: 97581 },
                    { age: "75 to 79", male: 55278, female: 69067 },
                    { age: "80 to 84", male: 33979, female: 50585 },
                    { age: "85 and Older", male: 24984, female: 52336 },
                  ],
                  SD: [
                    { age: "0 to 5", male: 30615, female: 29377 },
                    { age: "10 to 14", male: 28360, female: 26492 },
                    { age: "15 to 17", male: 17193, female: 16250 },
                    { age: "18 to 21", male: 25514, female: 24234 },
                    { age: "22 to 24", male: 18413, female: 16324 },
                    { age: "25 to 29", male: 29131, female: 26757 },
                    { age: "30 to 34", male: 28133, female: 26710 },
                    { age: "35 to 39", male: 24971, female: 23347 },
                    { age: "40 to 44", male: 24234, female: 23231 },
                    { age: "45 to 49", male: 25555, female: 24867 },
                    { age: "5 to 9", male: 30399, female: 28980 },
                    { age: "50 to 54", male: 29754, female: 29530 },
                    { age: "55 to 59", male: 29075, female: 28968 },
                    { age: "60 to 64", male: 25633, female: 25530 },
                    { age: "65 to 69", male: 19320, female: 18489 },
                    { age: "70 to 74", male: 12964, female: 14702 },
                    { age: "75 to 79", male: 9646, female: 12077 },
                    { age: "80 to 84", male: 7669, female: 10566 },
                    { age: "85 and Older", male: 6898, female: 13282 },
                  ],
                  TN: [
                    { age: "0 to 5", male: 204457, female: 196347 },
                    { age: "10 to 14", male: 217061, female: 206350 },
                    { age: "15 to 17", male: 129690, female: 124122 },
                    { age: "18 to 21", male: 183910, female: 175377 },
                    { age: "22 to 24", male: 132501, female: 134905 },
                    { age: "25 to 29", male: 210618, female: 214944 },
                    { age: "30 to 34", male: 209305, female: 214151 },
                    { age: "35 to 39", male: 200270, female: 207520 },
                    { age: "40 to 44", male: 216542, female: 219178 },
                    { age: "45 to 49", male: 217059, female: 224473 },
                    { age: "5 to 9", male: 210365, female: 204494 },
                    { age: "50 to 54", male: 223663, female: 238025 },
                    { age: "55 to 59", male: 210228, female: 229974 },
                    { age: "60 to 64", male: 186739, female: 207022 },
                    { age: "65 to 69", male: 153737, female: 171357 },
                    { age: "70 to 74", male: 108743, female: 125362 },
                    { age: "75 to 79", male: 72813, female: 94077 },
                    { age: "80 to 84", male: 46556, female: 71212 },
                    { age: "85 and Older", male: 33499, female: 72969 },
                  ],
                  TX: [
                    { age: "0 to 5", male: 996070, female: 955235 },
                    { age: "10 to 14", male: 998209, female: 959762 },
                    { age: "15 to 17", male: 587712, female: 561008 },
                    { age: "18 to 21", male: 818590, female: 756451 },
                    { age: "22 to 24", male: 582570, female: 556850 },
                    { age: "25 to 29", male: 982673, female: 948564 },
                    { age: "30 to 34", male: 961403, female: 947710 },
                    { age: "35 to 39", male: 897542, female: 898907 },
                    { age: "40 to 44", male: 897922, female: 908091 },
                    { age: "45 to 49", male: 857621, female: 865642 },
                    { age: "5 to 9", male: 1021123, female: 979891 },
                    { age: "50 to 54", male: 861849, female: 880746 },
                    { age: "55 to 59", male: 761410, female: 799294 },
                    { age: "60 to 64", male: 635465, female: 692072 },
                    { age: "65 to 69", male: 483436, female: 533368 },
                    { age: "70 to 74", male: 330457, female: 389996 },
                    { age: "75 to 79", male: 228243, female: 289446 },
                    { age: "80 to 84", male: 153391, female: 219572 },
                    { age: "85 and Older", male: 115630, female: 224693 },
                  ],
                  UT: [
                    { age: "0 to 5", male: 130873, female: 124371 },
                    { age: "10 to 14", male: 128076, female: 120364 },
                    { age: "15 to 17", male: 70832, female: 66798 },
                    { age: "18 to 21", male: 87877, female: 92950 },
                    { age: "22 to 24", male: 79431, female: 71405 },
                    { age: "25 to 29", male: 109125, female: 106576 },
                    { age: "30 to 34", male: 115198, female: 110546 },
                    { age: "35 to 39", male: 102771, female: 99664 },
                    { age: "40 to 44", male: 88181, female: 83229 },
                    { age: "45 to 49", male: 76552, female: 74993 },
                    { age: "5 to 9", male: 131094, female: 125110 },
                    { age: "50 to 54", male: 76913, female: 78113 },
                    { age: "55 to 59", male: 71490, female: 73221 },
                    { age: "60 to 64", male: 60996, female: 63835 },
                    { age: "65 to 69", male: 45491, female: 49273 },
                    { age: "70 to 74", male: 32191, female: 35931 },
                    { age: "75 to 79", male: 23112, female: 27761 },
                    { age: "80 to 84", male: 15827, female: 20155 },
                    { age: "85 and Older", male: 13199, female: 19855 },
                  ],
                  VA: [
                    { age: "0 to 5", male: 262278, female: 25e4 },
                    { age: "10 to 14", male: 266247, female: 251516 },
                    { age: "15 to 17", male: 160174, female: 153149 },
                    { age: "18 to 21", male: 248284, female: 233796 },
                    { age: "22 to 24", male: 175833, female: 167676 },
                    { age: "25 to 29", male: 296682, female: 287052 },
                    { age: "30 to 34", male: 286536, female: 283804 },
                    { age: "35 to 39", male: 264490, female: 265951 },
                    { age: "40 to 44", male: 278474, female: 286095 },
                    { age: "45 to 49", male: 286793, female: 297558 },
                    { age: "5 to 9", male: 264413, female: 256891 },
                    { age: "50 to 54", male: 296096, female: 309898 },
                    { age: "55 to 59", male: 262954, female: 283219 },
                    { age: "60 to 64", male: 228721, female: 250389 },
                    { age: "65 to 69", male: 178498, female: 197033 },
                    { age: "70 to 74", male: 123597, female: 146376 },
                    { age: "75 to 79", male: 82281, female: 103044 },
                    { age: "80 to 84", male: 55037, female: 80081 },
                    { age: "85 and Older", male: 43560, female: 92154 },
                  ],
                  VT: [
                    { age: "0 to 5", male: 15766, female: 14629 },
                    { age: "10 to 14", male: 18674, female: 17317 },
                    { age: "15 to 17", male: 11909, female: 11565 },
                    { age: "18 to 21", male: 21686, female: 20502 },
                    { age: "22 to 24", male: 12648, female: 11840 },
                    { age: "25 to 29", male: 18005, female: 17548 },
                    { age: "30 to 34", male: 17565, female: 18161 },
                    { age: "35 to 39", male: 16856, female: 17454 },
                    { age: "40 to 44", male: 19431, female: 19600 },
                    { age: "45 to 49", male: 21315, female: 22377 },
                    { age: "5 to 9", male: 17073, female: 16338 },
                    { age: "50 to 54", male: 24629, female: 26080 },
                    { age: "55 to 59", male: 24925, female: 25588 },
                    { age: "60 to 64", male: 21769, female: 23081 },
                    { age: "65 to 69", male: 16842, female: 17925 },
                    { age: "70 to 74", male: 11855, female: 12331 },
                    { age: "75 to 79", male: 7639, female: 9192 },
                    { age: "80 to 84", male: 5291, female: 8001 },
                    { age: "85 and Older", male: 4695, female: 8502 },
                  ],
                  WA: [
                    { age: "0 to 5", male: 228403, female: 217400 },
                    { age: "10 to 14", male: 224142, female: 217269 },
                    { age: "15 to 17", male: 136967, female: 130193 },
                    { age: "18 to 21", male: 195001, female: 179996 },
                    { age: "22 to 24", male: 151577, female: 140876 },
                    { age: "25 to 29", male: 260873, female: 244497 },
                    { age: "30 to 34", male: 252612, female: 243147 },
                    { age: "35 to 39", male: 230325, female: 223596 },
                    { age: "40 to 44", male: 234066, female: 228073 },
                    { age: "45 to 49", male: 233107, female: 230232 },
                    { age: "5 to 9", male: 227824, female: 214378 },
                    { age: "50 to 54", male: 245685, female: 247691 },
                    { age: "55 to 59", male: 231612, female: 241813 },
                    { age: "60 to 64", male: 206233, female: 219560 },
                    { age: "65 to 69", male: 158697, female: 170678 },
                    { age: "70 to 74", male: 107931, female: 118093 },
                    { age: "75 to 79", male: 70497, female: 83476 },
                    { age: "80 to 84", male: 48802, female: 66167 },
                    { age: "85 and Older", male: 43371, female: 80604 },
                  ],
                  WI: [
                    { age: "0 to 5", male: 176217, female: 168178 },
                    { age: "10 to 14", male: 191911, female: 180587 },
                    { age: "15 to 17", male: 115730, female: 110660 },
                    { age: "18 to 21", male: 167063, female: 161358 },
                    { age: "22 to 24", male: 117861, female: 113393 },
                    { age: "25 to 29", male: 183464, female: 176718 },
                    { age: "30 to 34", male: 187494, female: 181605 },
                    { age: "35 to 39", male: 172689, female: 168116 },
                    { age: "40 to 44", male: 179862, female: 176322 },
                    { age: "45 to 49", male: 198114, female: 197462 },
                    { age: "5 to 9", male: 186006, female: 180034 },
                    { age: "50 to 54", male: 217886, female: 219813 },
                    { age: "55 to 59", male: 204370, female: 206108 },
                    { age: "60 to 64", male: 176161, female: 178738 },
                    { age: "65 to 69", male: 130349, female: 136552 },
                    { age: "70 to 74", male: 90955, female: 103217 },
                    { age: "75 to 79", male: 65738, female: 81341 },
                    { age: "80 to 84", male: 48337, female: 67614 },
                    { age: "85 and Older", male: 41178, female: 82916 },
                  ],
                  WV: [
                    { age: "0 to 5", male: 52472, female: 50287 },
                    { age: "10 to 14", male: 55269, female: 52689 },
                    { age: "15 to 17", male: 34100, female: 32359 },
                    { age: "18 to 21", male: 51801, female: 48967 },
                    { age: "22 to 24", male: 35920, female: 34241 },
                    { age: "25 to 29", male: 54564, female: 52255 },
                    { age: "30 to 34", male: 56430, female: 55121 },
                    { age: "35 to 39", male: 55764, female: 55399 },
                    { age: "40 to 44", male: 60662, female: 59373 },
                    { age: "45 to 49", male: 61771, female: 61257 },
                    { age: "5 to 9", male: 53707, female: 51490 },
                    { age: "50 to 54", male: 66156, female: 68671 },
                    { age: "55 to 59", male: 66936, female: 71680 },
                    { age: "60 to 64", male: 65717, female: 67056 },
                    { age: "65 to 69", male: 51285, female: 54807 },
                    { age: "70 to 74", male: 36504, female: 39946 },
                    { age: "75 to 79", male: 25738, female: 31619 },
                    { age: "80 to 84", male: 16397, female: 24351 },
                    { age: "85 and Older", male: 12438, female: 26221 },
                  ],
                  WY: [
                    { age: "0 to 5", male: 19649, female: 18996 },
                    { age: "10 to 14", male: 20703, female: 17785 },
                    { age: "15 to 17", male: 11500, female: 10383 },
                    { age: "18 to 21", male: 18008, female: 15534 },
                    { age: "22 to 24", male: 12727, female: 11405 },
                    { age: "25 to 29", male: 21459, female: 19350 },
                    { age: "30 to 34", male: 21008, female: 19465 },
                    { age: "35 to 39", male: 18573, female: 17022 },
                    { age: "40 to 44", male: 17553, female: 16402 },
                    { age: "45 to 49", male: 17580, female: 16702 },
                    { age: "5 to 9", male: 19198, female: 19519 },
                    { age: "50 to 54", male: 20337, female: 20958 },
                    { age: "55 to 59", male: 21523, female: 21e3 },
                    { age: "60 to 64", male: 19048, female: 18292 },
                    { age: "65 to 69", male: 13999, female: 13130 },
                    { age: "70 to 74", male: 8710, female: 9880 },
                    { age: "75 to 79", male: 6149, female: 6938 },
                    { age: "80 to 84", male: 4442, female: 5560 },
                    { age: "85 and Older", male: 3395, female: 5797 },
                  ],
                };
              function r(e) {
                for (var t = 0, a = 0, l = 0; l < e.length; l++)
                  (t += (r = e[l]).male), (a += r.female);
                for (l = 0; l < e.length; l++) {
                  var r;
                  ((r = e[l]).malePercent =
                    (-1 * Math.round((r.male / t) * 1e4)) / 100),
                    (r.femalePercent = Math.round((r.female / a) * 1e4) / 100);
                }
                return e;
              }
              (a = r(a)),
                (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
              var o = t.container.children.push(
                am5.Container.new(t, {
                  layout: t.horizontalLayout,
                  width: am5.p100,
                  height: am5.p100,
                })
              );
              t.numberFormatter.setAll({ numberFormat: "#.##as" });
              var i = o.children.push(
                  am5xy.XYChart.new(t, {
                    panX: !1,
                    panY: !1,
                    wheelX: "none",
                    wheelY: "none",
                    layout: t.verticalLayout,
                    width: am5.percent(60),
                  })
                ),
                s = i.yAxes.push(
                  am5xy.CategoryAxis.new(t, {
                    categoryField: "age",
                    renderer: am5xy.AxisRendererY.new(t, {}),
                  })
                );
              s
                .get("renderer")
                .labels.template.setAll({
                  paddingTop: 0,
                  fontWeight: "400",
                  fontSize: 11,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
                }),
                s
                  .get("renderer")
                  .grid.template.setAll({
                    stroke: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-300")
                    ),
                    strokeWidth: 1,
                    strokeOpacity: 1,
                    strokeDasharray: [3],
                  }),
                s.data.setAll(a);
              var n = i.yAxes.push(
                am5xy.CategoryAxis.new(t, {
                  categoryField: "age",
                  renderer: am5xy.AxisRendererY.new(t, { opposite: !0 }),
                })
              );
              n
                .get("renderer")
                .grid.template.setAll({
                  stroke: am5.color(
                    KTUtil.getCssVariableValue("--bs-gray-300")
                  ),
                  strokeWidth: 1,
                  strokeOpacity: 1,
                  strokeDasharray: [3],
                }),
                n
                  .get("renderer")
                  .labels.template.setAll({
                    paddingTop: 0,
                    fontWeight: "400",
                    fontSize: 11,
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-500")
                    ),
                  }),
                n.data.setAll(a);
              var d = i.xAxes.push(
                am5xy.ValueAxis.new(t, {
                  min: -10,
                  max: 10,
                  numberFormat: "#.s'%'",
                  renderer: am5xy.AxisRendererX.new(t, { minGridDistance: 40 }),
                })
              );
              d
                .get("renderer")
                .labels.template.setAll({
                  paddingTop: 20,
                  fontWeight: "400",
                  fontSize: 11,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
                }),
                d
                  .get("renderer")
                  .grid.template.setAll({ disabled: !0, strokeOpacity: 0 });
              var m = i.series.push(
                am5xy.ColumnSeries.new(t, {
                  name: "Males",
                  xAxis: d,
                  yAxis: s,
                  valueXField: "malePercent",
                  categoryYField: "age",
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                  clustered: !1,
                })
              );
              m.columns.template.setAll({
                tooltipText:
                  "Males, age {categoryY}: {male} ({malePercent.formatNumber('#.0s')}%)",
                tooltipX: am5.p100,
                cornerRadiusBR: 4,
                cornerRadiusTR: 4,
                cornerRadiusBL: 0,
                cornerRadiusTL: 0,
              }),
                m.data.setAll(a);
              var c = i.series.push(
                am5xy.ColumnSeries.new(t, {
                  name: "Males",
                  xAxis: d,
                  yAxis: s,
                  valueXField: "femalePercent",
                  categoryYField: "age",
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                  clustered: !1,
                })
              );
              c.columns.template.setAll({
                tooltipText:
                  "Males, age {categoryY}: {female} ({femalePercent.formatNumber('#.0s')}%)",
                tooltipX: am5.p100,
                cornerRadiusBR: 4,
                cornerRadiusTR: 4,
                cornerRadiusBL: 0,
                cornerRadiusTL: 0,
              }),
                c.data.setAll(a),
                i.plotContainer.children.push(
                  am5.Label.new(t, {
                    text: "Males",
                    fontSize: 13,
                    fontWeight: "500",
                    y: 5,
                    x: 5,
                    fill: m.get("fill"),
                  })
                ),
                i.plotContainer.children.push(
                  am5.Label.new(t, {
                    text: "Females",
                    fontSize: 13,
                    fontWeight: "500",
                    y: 5,
                    x: am5.p100,
                    centerX: am5.p100,
                    dx: -5,
                    fill: c.get("fill"),
                  })
                );
              var g = o.children.push(
                am5map.MapChart.new(t, {
                  panX: "none",
                  panY: "none",
                  wheelY: "none",
                  projection: am5map.geoAlbersUsa(),
                  width: am5.percent(40),
                })
              );
              i.getTooltip().set("autoTextColor", !1);
              var f,
                u = g.children.push(
                  am5.Label.new(t, {
                    text: "United States",
                    fontSize: 14,
                    fontWeight: "500",
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-800")
                    ),
                    y: 20,
                    x: am5.p50,
                    centerX: am5.p50,
                  })
                ),
                p = g.series.push(
                  am5map.MapPolygonSeries.new(t, {
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-300")
                    ),
                    geoJSON: am5geodata_usaLow,
                  })
                );
              p.mapPolygons.template.setAll({
                tooltipText: "{name}",
                interactive: !0,
              }),
                p.mapPolygons.template.states.create("hover", {
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                }),
                p.mapPolygons.template.states.create("active", {
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                }),
                p.mapPolygons.template.events.on("click", function (e) {
                  f && f.set("active", !1), (f = e.target).set("active", !0);
                  for (
                    var t = e.target.dataItem.dataContext.id.split("-").pop(),
                      a = r(l[t]),
                      o = 0;
                    o < a.length;
                    o++
                  )
                    m.data.setIndex(o, a[o]), c.data.setIndex(o, a[o]);
                  u.set("text", e.target.dataItem.dataContext.name);
                });
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget24),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget24.init();
  });
var KTChartsWidget25 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_25_chart_1");
        if (e) {
          var t,
            a = function () {
              (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
              var a = t.container.children.push(
                am5radar.RadarChart.new(t, {
                  panX: !1,
                  panY: !1,
                  wheelX: "panX",
                  wheelY: "zoomX",
                  innerRadius: am5.percent(40),
                  radius: am5.percent(70),
                  arrangeTooltips: !1,
                })
              );
              a.set(
                "cursor",
                am5radar.RadarCursor.new(t, { behavior: "zoomX" })
              ).lineY.set("visible", !1);
              var l = am5radar.AxisRendererCircular.new(t, {
                minGridDistance: 30,
              });
              l.labels.template.setAll({
                textType: "radial",
                radius: 10,
                paddingTop: 0,
                paddingBottom: 0,
                centerY: am5.p50,
                fontWeight: "400",
                fontSize: 11,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700")),
              }),
                l.grid.template.setAll({
                  location: 0.5,
                  strokeDasharray: [2, 2],
                  stroke: KTUtil.getCssVariableValue("--bs-gray-400"),
                });
              var r = a.xAxes.push(
                  am5xy.CategoryAxis.new(t, {
                    maxDeviation: 0,
                    categoryField: "name",
                    renderer: l,
                  })
                ),
                o = am5radar.AxisRendererRadial.new(t, { minGridDistance: 30 });
              o.labels.template.setAll({
                fontWeight: "500",
                fontSize: 12,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700")),
              });
              var i = a.yAxes.push(am5xy.ValueAxis.new(t, { renderer: o }));
              o.grid.template.setAll({
                strokeDasharray: [2, 2],
                stroke: KTUtil.getCssVariableValue("--bs-gray-400"),
              });
              var s = a.series.push(
                am5radar.RadarLineSeries.new(t, {
                  name: "Revenue",
                  xAxis: r,
                  yAxis: i,
                  valueYField: "value1",
                  categoryXField: "name",
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                })
              );
              s.strokes.template.setAll({ strokeOpacity: 0 }),
                s.fills.template.setAll({
                  visible: !0,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                  fillOpacity: 0.5,
                });
              var n = a.series.push(
                am5radar.RadarLineSeries.new(t, {
                  name: "Expense",
                  xAxis: r,
                  yAxis: i,
                  valueYField: "value2",
                  categoryXField: "name",
                  stacked: !0,
                  tooltip: am5.Tooltip.new(t, {
                    labelText: "Revenue: {value1}\nExpense:{value2}",
                  }),
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                })
              );
              n.strokes.template.setAll({ strokeOpacity: 0 }),
                n.fills.template.setAll({
                  visible: !0,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                  fillOpacity: 0.5,
                });
              var d = a.radarContainer.children.push(
                am5.Legend.new(t, {
                  width: 150,
                  centerX: am5.p50,
                  centerY: am5.p50,
                })
              );
              d.data.setAll([s, n]),
                d.labels.template.setAll({
                  fontWeight: "600",
                  fontSize: 13,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700")),
                });
              var m = [
                { name: "Openlane", value1: 160.2, value2: 26.9 },
                { name: "Yearin", value1: 120.1, value2: 50.5 },
                { name: "Goodsilron", value1: 150.7, value2: 12.3 },
                { name: "Condax", value1: 69.4, value2: 74.5 },
                { name: "Opentech", value1: 78.5, value2: 29.7 },
                { name: "Golddex", value1: 77.6, value2: 102.2 },
                { name: "Isdom", value1: 69.8, value2: 22.6 },
                { name: "Plusstrip", value1: 63.6, value2: 45.3 },
                { name: "Kinnamplus", value1: 59.7, value2: 12.8 },
                { name: "Zumgoity", value1: 64.3, value2: 19.6 },
                { name: "Stanredtax", value1: 52.9, value2: 96.3 },
                { name: "Conecom", value1: 42.9, value2: 11.9 },
                { name: "Zencorporation", value1: 40.9, value2: 16.8 },
                { name: "Iselectrics", value1: 39.2, value2: 9.9 },
                { name: "Treequote", value1: 76.6, value2: 36.9 },
                { name: "Sumace", value1: 34.8, value2: 14.6 },
                { name: "Lexiqvolax", value1: 32.1, value2: 35.6 },
                { name: "Sunnamplex", value1: 31.8, value2: 5.9 },
                { name: "Faxquote", value1: 29.3, value2: 14.7 },
                { name: "Donware", value1: 23, value2: 2.8 },
                { name: "Warephase", value1: 21.5, value2: 12.1 },
                { name: "Donquadtech", value1: 19.7, value2: 10.8 },
                { name: "Nam-zim", value1: 15.5, value2: 4.1 },
                { name: "Y-corporation", value1: 14.2, value2: 11.3 },
              ];
              s.data.setAll(m),
                n.data.setAll(m),
                r.data.setAll(m),
                s.appear(1e3),
                n.appear(1e3),
                a.appear(1e3, 100);
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })(),
      (function () {
        if ("undefined" != typeof am5) {
          var e = document.getElementById("kt_charts_widget_25_chart_2");
          if (e) {
            var t,
              a = function () {
                (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
                var a = t.container.children.push(
                  am5radar.RadarChart.new(t, {
                    panX: !1,
                    panY: !1,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    innerRadius: am5.percent(40),
                    radius: am5.percent(70),
                    arrangeTooltips: !1,
                  })
                );
                a.set(
                  "cursor",
                  am5radar.RadarCursor.new(t, { behavior: "zoomX" })
                ).lineY.set("visible", !1);
                var l = am5radar.AxisRendererCircular.new(t, {
                  minGridDistance: 30,
                });
                l.labels.template.setAll({
                  textType: "radial",
                  radius: 10,
                  paddingTop: 0,
                  paddingBottom: 0,
                  centerY: am5.p50,
                  fontWeight: "400",
                  fontSize: 11,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700")),
                }),
                  l.grid.template.setAll({
                    location: 0.5,
                    strokeDasharray: [2, 2],
                    stroke: KTUtil.getCssVariableValue("--bs-gray-400"),
                  });
                var r = a.xAxes.push(
                    am5xy.CategoryAxis.new(t, {
                      maxDeviation: 0,
                      categoryField: "name",
                      renderer: l,
                    })
                  ),
                  o = am5radar.AxisRendererRadial.new(t, {
                    minGridDistance: 30,
                  }),
                  i = a.yAxes.push(am5xy.ValueAxis.new(t, { renderer: o }));
                o.grid.template.setAll({
                  strokeDasharray: [2, 2],
                  stroke: KTUtil.getCssVariableValue("--bs-gray-400"),
                }),
                  o.labels.template.setAll({
                    fontWeight: "500",
                    fontSize: 12,
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-700")
                    ),
                  });
                var s = a.series.push(
                  am5radar.RadarLineSeries.new(t, {
                    name: "Revenue",
                    xAxis: r,
                    yAxis: i,
                    valueYField: "value1",
                    categoryXField: "name",
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                  })
                );
                s.strokes.template.setAll({ strokeOpacity: 0 }),
                  s.fills.template.setAll({
                    visible: !0,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                    fillOpacity: 0.5,
                  });
                var n = a.series.push(
                  am5radar.RadarLineSeries.new(t, {
                    name: "Expense",
                    xAxis: r,
                    yAxis: i,
                    valueYField: "value2",
                    categoryXField: "name",
                    stacked: !0,
                    tooltip: am5.Tooltip.new(t, {
                      labelText: "Revenue: {value1}\nExpense:{value2}",
                    }),
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                  })
                );
                n.strokes.template.setAll({ strokeOpacity: 0 }),
                  n.fills.template.setAll({
                    visible: !0,
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                    fillOpacity: 0.5,
                  });
                var d = a.radarContainer.children.push(
                  am5.Legend.new(t, {
                    width: 150,
                    centerX: am5.p50,
                    centerY: am5.p50,
                  })
                );
                d.data.setAll([s, n]),
                  d.labels.template.setAll({
                    fontWeight: "600",
                    fontSize: 13,
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-700")
                    ),
                  });
                var m = [
                  { name: "Openlane", value1: 160.2, value2: 66.9 },
                  { name: "Yearin", value1: 150.1, value2: 50.5 },
                  { name: "Goodsilron", value1: 120.7, value2: 32.3 },
                  { name: "Condax", value1: 89.4, value2: 74.5 },
                  { name: "Opentech", value1: 78.5, value2: 29.7 },
                  { name: "Golddex", value1: 77.6, value2: 102.2 },
                  { name: "Isdom", value1: 69.8, value2: 22.6 },
                  { name: "Plusstrip", value1: 63.6, value2: 45.3 },
                  { name: "Kinnamplus", value1: 59.7, value2: 12.8 },
                  { name: "Zumgoity", value1: 54.3, value2: 19.6 },
                  { name: "Stanredtax", value1: 52.9, value2: 96.3 },
                  { name: "Conecom", value1: 42.9, value2: 11.9 },
                  { name: "Zencorporation", value1: 40.9, value2: 16.8 },
                  { name: "Iselectrics", value1: 39.2, value2: 9.9 },
                  { name: "Treequote", value1: 36.6, value2: 36.9 },
                  { name: "Sumace", value1: 34.8, value2: 14.6 },
                  { name: "Lexiqvolax", value1: 32.1, value2: 35.6 },
                  { name: "Sunnamplex", value1: 31.8, value2: 5.9 },
                  { name: "Faxquote", value1: 29.3, value2: 14.7 },
                  { name: "Donware", value1: 23, value2: 2.8 },
                  { name: "Warephase", value1: 21.5, value2: 12.1 },
                  { name: "Donquadtech", value1: 19.7, value2: 10.8 },
                  { name: "Nam-zim", value1: 15.5, value2: 4.1 },
                  { name: "Y-corporation", value1: 14.2, value2: 11.3 },
                ];
                s.data.setAll(m),
                  n.data.setAll(m),
                  r.data.setAll(m),
                  s.appear(1e3),
                  n.appear(1e3),
                  a.appear(1e3, 100);
              };
            am5.ready(function () {
              a();
            }),
              KTThemeMode.on("kt.thememode.change", function () {
                t.dispose(), a();
              });
          }
        }
      })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget25),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget25.init();
  });
var KTChartsWidget26 = (function () {
  var e = { self: null, rendered: !1 },
    t = function () {
      var t = document.getElementById("kt_charts_widget_26");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-500"),
          r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          o = KTUtil.getCssVariableValue("--bs-primary"),
          i = KTUtil.getCssVariableValue("--bs-primary"),
          s = {
            series: [
              {
                name: t.getAttribute("data-kt-chart-info"),
                data: [
                  34.5, 34.5, 35, 35, 35.5, 35.5, 35, 35, 35.5, 35.5, 35, 35,
                  34.5, 34.5, 35, 35, 35.5, 35.5, 35,
                ],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 80, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [o] },
            xaxis: {
              categories: [
                "",
                "Apr 02",
                "Apr 03",
                "Apr 04",
                "Apr 05",
                "Apr 06",
                "Apr 07",
                "Apr 08",
                "Apr 09",
                "Apr 10",
                "Apr 11",
                "Apr 12",
                "Apr 13",
                "Apr 14",
                "Apr 17",
                "Apr 18",
                "Apr 19",
                "Apr 21",
                "",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              tickAmount: 6,
              labels: {
                rotate: 0,
                rotateAlways: !0,
                style: { colors: l, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: o, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              max: 36.3,
              min: 33,
              tickAmount: 6,
              labels: {
                style: { colors: l, fontSize: "12px" },
                formatter: function (e) {
                  return "$" + parseInt(10 * e);
                },
              },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return "$" + parseInt(10 * e);
                },
              },
            },
            colors: [i],
            grid: {
              borderColor: r,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: o, strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, s)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t();
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget26),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget26.init();
  });
var KTChartsWidget27 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_charts_widget_27");
      if (t) {
        var a = KTUtil.getCssVariableValue("--bs-gray-800"),
          l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          r = {
            series: [
              { name: "Sessions", data: [12.478, 7.546, 6.083, 5.041, 4.42] },
            ],
            chart: {
              fontFamily: "inherit",
              type: "bar",
              height: 350,
              toolbar: { show: !1 },
            },
            plotOptions: {
              bar: {
                borderRadius: 8,
                horizontal: !0,
                distributed: !0,
                barHeight: 50,
                dataLabels: { position: "bottom" },
              },
            },
            dataLabels: {
              enabled: !0,
              textAnchor: "start",
              offsetX: 0,
              formatter: function (e, t) {
                e *= 1e3;
                return wNumb({ thousand: "," }).to(e);
              },
              style: { fontSize: "14px", fontWeight: "600", align: "left" },
            },
            legend: { show: !1 },
            colors: ["#3E97FF", "#F1416C", "#50CD89", "#FFC700", "#7239EA"],
            xaxis: {
              categories: ["USA", "India", "Canada", "Brasil", "France"],
              labels: {
                formatter: function (e) {
                  return e + "K";
                },
                style: {
                  colors: a,
                  fontSize: "14px",
                  fontWeight: "600",
                  align: "left",
                },
              },
              axisBorder: { show: !1 },
            },
            yaxis: {
              labels: {
                formatter: function (e, t) {
                  return Number.isInteger(e)
                    ? e + " - " + parseInt((100 * e) / 18).toString() + "%"
                    : e;
                },
                style: { colors: a, fontSize: "14px", fontWeight: "600" },
                offsetY: 2,
                align: "left",
              },
            },
            grid: {
              borderColor: l,
              xaxis: { lines: { show: !0 } },
              yaxis: { lines: { show: !1 } },
              strokeDashArray: 4,
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e;
                },
              },
            },
          };
        (e.self = new ApexCharts(t, r)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget27),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget27.init();
  });
var KTChartsWidget28 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_charts_widget_28");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-500"),
          r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          o = KTUtil.getCssVariableValue("--bs-info"),
          i = {
            series: [
              {
                name: "Links",
                data: [
                  190, 230, 230, 200, 200, 190, 190, 200, 200, 220, 220, 200,
                  200, 210, 210,
                ],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 80, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [o] },
            xaxis: {
              categories: [
                "May 04",
                "May 05",
                "May 06",
                "May 09",
                "May 10",
                "May 12",
                "May 14",
                "May 17",
                "May 18",
                "May 20",
                "May 22",
                "May 24",
                "May 26",
                "May 28",
                "May 30",
              ],
              axisBorder: { show: !1 },
              offsetX: 20,
              axisTicks: { show: !1 },
              tickAmount: 3,
              labels: {
                rotate: 0,
                rotateAlways: !1,
                style: { colors: l, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: o, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              tickAmount: 4,
              max: 250,
              min: 100,
              labels: {
                style: { colors: l, fontSize: "12px" },
                formatter: function (e) {
                  return e;
                },
              },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e;
                },
              },
            },
            colors: [o],
            grid: {
              borderColor: r,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: o, strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, i)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget28),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget28.init();
  });
var KTChartsWidget29 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_charts_widget_29");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-500"),
          r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          o = KTUtil.getCssVariableValue("--bs-warning"),
          i = {
            series: [
              {
                name: "Position",
                data: [4, 7.5, 7.5, 6, 6, 4, 4, 6, 6, 8, 8, 6, 6, 7, 7],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 80, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [o] },
            xaxis: {
              categories: [
                "Apr 02",
                "Apr 03",
                "Apr 04",
                "Apr 05",
                "Apr 06",
                "Apr 09",
                "Apr 10",
                "Apr 12",
                "Apr 14",
                "Apr 17",
                "Apr 18",
                "Apr 18",
                "Apr 20",
                "Apr 22",
                "Apr 24",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              offsetX: 20,
              tickAmount: 4,
              labels: {
                rotate: 0,
                rotateAlways: !1,
                style: { colors: l, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: o, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              tickAmount: 4,
              max: 10,
              min: 1,
              labels: {
                style: { colors: l, fontSize: "12px" },
                formatter: function (e) {
                  return e;
                },
              },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e;
                },
              },
            },
            colors: [o],
            grid: {
              borderColor: r,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: o, strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, i)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget29),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget29.init();
  });
var KTChartsWidget3 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_charts_widget_3");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-500"),
          r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          o = KTUtil.getCssVariableValue("--bs-success"),
          i = {
            series: [
              {
                name: "Sales",
                data: [
                  18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18,
                  18, 20, 20, 22,
                ],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 80, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [o] },
            xaxis: {
              categories: [
                "",
                "Apr 02",
                "Apr 03",
                "Apr 04",
                "Apr 05",
                "Apr 06",
                "Apr 07",
                "Apr 08",
                "Apr 09",
                "Apr 10",
                "Apr 11",
                "Apr 12",
                "Apr 13",
                "Apr 14",
                "Apr 15",
                "Apr 16",
                "Apr 17",
                "Apr 18",
                "",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              tickAmount: 6,
              labels: {
                rotate: 0,
                rotateAlways: !0,
                style: { colors: l, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: o, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              tickAmount: 4,
              max: 24,
              min: 10,
              labels: {
                style: { colors: l, fontSize: "12px" },
                formatter: function (e) {
                  return "$" + e + "K";
                },
              },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return "$" + e + "K";
                },
              },
            },
            colors: [KTUtil.getCssVariableValue("--bs-success")],
            grid: {
              borderColor: r,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: o, strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, i)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget3),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget3.init();
  });
var KTChartsWidget30 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_30_chart");
        if (e) {
          var t,
            a = function () {
              (t = am5.Root.new(e)).setThemes([am5themes_Animated.new(t)]);
              var a = t.container.children
                .push(
                  am5percent.PieChart.new(t, {
                    startAngle: 180,
                    endAngle: 360,
                    layout: t.verticalLayout,
                    innerRadius: am5.percent(50),
                  })
                )
                .series.push(
                  am5percent.PieSeries.new(t, {
                    startAngle: 180,
                    endAngle: 360,
                    valueField: "value",
                    categoryField: "category",
                    alignLabels: !1,
                  })
                );
              a.labels.template.setAll({
                fontWeight: "400",
                fontSize: 13,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-500")),
              }),
                a.states.create("hidden", { startAngle: 180, endAngle: 180 }),
                a.slices.template.setAll({ cornerRadius: 5 }),
                a.ticks.template.setAll({ forceHidden: !0 }),
                a.data.setAll([
                  {
                    value: 10,
                    category: "One",
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                  },
                  {
                    value: 9,
                    category: "Two",
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                  },
                  {
                    value: 6,
                    category: "Three",
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-danger")),
                  },
                  {
                    value: 5,
                    category: "Four",
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-warning")),
                  },
                  {
                    value: 4,
                    category: "Five",
                    fill: am5.color(KTUtil.getCssVariableValue("--bs-info")),
                  },
                  {
                    value: 3,
                    category: "Six",
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-secondary")
                    ),
                  },
                ]),
                a.appear(1e3, 100);
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget30),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget30.init();
  });
var KTChartsWidget31 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.getElementById("kt_charts_widget_31_chart");
        if (e) {
          var t,
            a,
            l = function () {
              (a = am5.Root.new(e)).setThemes([am5themes_Animated.new(a)]),
                (t = a.container.children.push(
                  am5radar.RadarChart.new(a, {
                    panX: !1,
                    panY: !1,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    innerRadius: am5.percent(40),
                    radius: am5.percent(70),
                    arrangeTooltips: !1,
                  })
                ))
                  .set(
                    "cursor",
                    am5radar.RadarCursor.new(a, { behavior: "zoomX" })
                  )
                  .lineY.set("visible", !1);
              var l = am5radar.AxisRendererCircular.new(a, {
                minGridDistance: 30,
              });
              l.labels.template.setAll({
                textType: "radial",
                radius: 10,
                paddingTop: 0,
                paddingBottom: 0,
                centerY: am5.p50,
                fontWeight: "400",
                fontSize: 11,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-800")),
              }),
                l.grid.template.setAll({
                  location: 0.5,
                  strokeDasharray: [2, 2],
                  stroke: KTUtil.getCssVariableValue("--bs-gray-400"),
                });
              var r = t.xAxes.push(
                  am5xy.CategoryAxis.new(a, {
                    maxDeviation: 0,
                    categoryField: "name",
                    renderer: l,
                  })
                ),
                o = am5radar.AxisRendererRadial.new(a, { minGridDistance: 30 });
              o.labels.template.setAll({
                fontWeight: "500",
                fontSize: 12,
                fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700")),
              });
              var i = t.yAxes.push(am5xy.ValueAxis.new(a, { renderer: o }));
              o.grid.template.setAll({
                strokeDasharray: [2, 2],
                stroke: KTUtil.getCssVariableValue("--bs-gray-400"),
              });
              var s = t.series.push(
                am5radar.RadarLineSeries.new(a, {
                  name: "Revenue",
                  xAxis: r,
                  yAxis: i,
                  valueYField: "value1",
                  categoryXField: "name",
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                })
              );
              s.strokes.template.setAll({ strokeOpacity: 0 }),
                s.fills.template.setAll({
                  visible: !0,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                  fillOpacity: 0.5,
                });
              var n = t.series.push(
                am5radar.RadarLineSeries.new(a, {
                  name: "Expense",
                  xAxis: r,
                  yAxis: i,
                  valueYField: "value2",
                  categoryXField: "name",
                  stacked: !0,
                  tooltip: am5.Tooltip.new(a, {
                    labelText: "Revenue: {value1}\nExpense:{value2}",
                  }),
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-success")),
                })
              );
              n.strokes.template.setAll({ strokeOpacity: 0 }),
                n.fills.template.setAll({
                  visible: !0,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-primary")),
                  fillOpacity: 0.5,
                });
              var d = t.radarContainer.children.push(
                am5.Legend.new(a, {
                  width: 150,
                  centerX: am5.p50,
                  centerY: am5.p50,
                })
              );
              d.data.setAll([s, n]),
                d.labels.template.setAll({
                  fontWeight: "600",
                  fontSize: 13,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-700")),
                });
              var m = [
                { name: "Openlane", value1: 160.2, value2: 26.9 },
                { name: "Yearin", value1: 120.1, value2: 50.5 },
                { name: "Goodsilron", value1: 150.7, value2: 12.3 },
                { name: "Condax", value1: 69.4, value2: 74.5 },
                { name: "Opentech", value1: 78.5, value2: 29.7 },
                { name: "Golddex", value1: 77.6, value2: 102.2 },
                { name: "Isdom", value1: 69.8, value2: 22.6 },
                { name: "Plusstrip", value1: 63.6, value2: 45.3 },
                { name: "Kinnamplus", value1: 59.7, value2: 12.8 },
                { name: "Zumgoity", value1: 64.3, value2: 19.6 },
                { name: "Stanredtax", value1: 52.9, value2: 96.3 },
                { name: "Conecom", value1: 42.9, value2: 11.9 },
                { name: "Zencorporation", value1: 40.9, value2: 16.8 },
                { name: "Iselectrics", value1: 39.2, value2: 9.9 },
                { name: "Treequote", value1: 76.6, value2: 36.9 },
                { name: "Sumace", value1: 34.8, value2: 14.6 },
                { name: "Lexiqvolax", value1: 32.1, value2: 35.6 },
                { name: "Sunnamplex", value1: 31.8, value2: 5.9 },
                { name: "Faxquote", value1: 29.3, value2: 14.7 },
                { name: "Donware", value1: 23, value2: 2.8 },
                { name: "Warephase", value1: 21.5, value2: 12.1 },
                { name: "Donquadtech", value1: 19.7, value2: 10.8 },
                { name: "Nam-zim", value1: 15.5, value2: 4.1 },
                { name: "Y-corporation", value1: 14.2, value2: 11.3 },
              ];
              s.data.setAll(m),
                n.data.setAll(m),
                r.data.setAll(m),
                s.appear(1e3),
                n.appear(1e3),
                t.appear(1e3, 100);
            };
          am5.ready(function () {
            l();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              a.dispose(), l();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget31),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget31.init();
  });
var KTChartsWidget32 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = function (e, t, a, l, r) {
      var o = document.querySelector(a);
      if (o) {
        var i = parseInt(KTUtil.css(o, "height")),
          s = KTUtil.getCssVariableValue("--bs-gray-900"),
          n = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          d = {
            series: [{ name: "Deliveries", data: l }],
            chart: {
              fontFamily: "inherit",
              type: "bar",
              height: i,
              toolbar: { show: !1 },
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["22%"],
                borderRadius: 5,
                dataLabels: { position: "top" },
                startingShape: "flat",
              },
            },
            legend: { show: !1 },
            dataLabels: {
              enabled: !0,
              offsetY: -28,
              style: { fontSize: "13px", colors: [s] },
            },
            stroke: { show: !0, width: 2, colors: ["transparent"] },
            xaxis: {
              categories: [
                "Grossey",
                "Pet Food",
                "Flowers",
                "Restaurant",
                "Kids Toys",
                "Clothing",
                "Still Water",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: {
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                  fontSize: "13px",
                },
              },
              crosshairs: {
                fill: { gradient: { opacityFrom: 0, opacityTo: 0 } },
              },
            },
            yaxis: {
              labels: {
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                  fontSize: "13px",
                },
              },
            },
            fill: { opacity: 1 },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: { style: { fontSize: "12px" } },
            colors: [
              KTUtil.getCssVariableValue("--bs-primary"),
              KTUtil.getCssVariableValue("--bs-primary-light"),
            ],
            grid: {
              borderColor: n,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
          };
        e.self = new ApexCharts(o, d);
        var m = document.querySelector(t);
        !0 === r &&
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200),
          m.addEventListener("shown.bs.tab", function (t) {
            !1 === e.rendered && (e.self.render(), (e.rendered = !0));
          });
      }
    };
  return {
    init: function () {
      var r = [54, 42, 75, 110, 23, 87, 50];
      l(e, "#kt_charts_widget_32_tab_1", "#kt_charts_widget_32_chart_1", r, !0);
      var o = [25, 55, 35, 50, 45, 20, 31];
      l(t, "#kt_charts_widget_32_tab_2", "#kt_charts_widget_32_chart_2", o, !1);
      var i = [45, 15, 35, 70, 45, 50, 21];
      l(a, "#kt_charts_widget_32_tab_3", "#kt_charts_widget_32_chart_3", i, !1),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(),
            t.rendered && t.self.destroy(),
            a.rendered && a.self.destroy(),
            l(
              e,
              "#kt_charts_widget_32_tab_1",
              "#kt_charts_widget_32_chart_1",
              r,
              e.rendered
            ),
            l(
              t,
              "#kt_charts_widget_32_tab_2",
              "#kt_charts_widget_32_chart_2",
              o,
              t.rendered
            ),
            l(
              a,
              "#kt_charts_widget_32_tab_3",
              "#kt_charts_widget_32_chart_3",
              i,
              a.rendered
            );
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget32),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget32.init();
  });
var KTChartsWidget33 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = { self: null, rendered: !1 },
    r = { self: null, rendered: !1 },
    o = function (e, t, a, l, r, o) {
      var i = document.querySelector(a);
      if (i) {
        var s = i.getAttribute("data-kt-chart-color"),
          n = parseInt(KTUtil.css(i, "height")),
          d = KTUtil.getCssVariableValue("--bs-gray-500"),
          m = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          c = KTUtil.getCssVariableValue("--bs-" + s),
          g = {
            series: [{ name: "Etherium ", data: l }],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: n,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.2,
                stops: [15, 120, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [c] },
            xaxis: {
              categories: r,
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              offsetX: 20,
              tickAmount: 4,
              labels: {
                rotate: 0,
                rotateAlways: !1,
                show: !1,
                style: { colors: d, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: c, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: { tickAmount: 4, max: 4e3, min: 1e3, labels: { show: !1 } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e + "$";
                },
              },
            },
            colors: [c],
            grid: {
              borderColor: m,
              strokeDashArray: 3,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: c, strokeWidth: 3 },
          };
        e.self = new ApexCharts(i, g);
        var f = document.querySelector(t);
        !0 === o &&
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200),
          f.addEventListener("shown.bs.tab", function (t) {
            !1 === e.rendered && (e.self.render(), (e.rendered = !0));
          });
      }
    };
  return {
    init: function () {
      var i = [
          2100, 3200, 3200, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200, 3e3,
          3e3, 3250, 3250,
        ],
        s = [
          "10AM",
          "10.30AM",
          "11AM",
          "11.15AM",
          "11.30AM",
          "12PM",
          "1PM",
          "2PM",
          "3PM",
          "4PM",
          "5PM",
          "6PM",
          "7PM",
          "8PM",
          "9PM",
        ];
      o(
        e,
        "#kt_charts_widget_33_tab_1",
        "#kt_charts_widget_33_chart_1",
        i,
        s,
        !0
      );
      var n = [
          2300, 2300, 2e3, 3200, 3200, 2800, 2400, 2400, 3100, 2900, 3100, 3100,
          2600, 2600, 3200,
        ],
        d = [
          "Apr 01",
          "Apr 02",
          "Apr 03",
          "Apr 04",
          "Apr 05",
          "Apr 06",
          "Apr 07",
          "Apr 08",
          "Apr 09",
          "Apr 10",
          "Apr 11",
          "Apr 12",
          "Apr 13",
          "Apr 14",
          "Apr 15",
        ];
      o(
        t,
        "#kt_charts_widget_33_tab_2",
        "#kt_charts_widget_33_chart_2",
        n,
        d,
        !1
      );
      var m = [
          2600, 3200, 2300, 2300, 2e3, 3200, 3100, 2900, 3200, 3200, 2600, 3100,
          2800, 2400, 2400,
        ],
        c = [
          "Apr 02",
          "Apr 03",
          "Apr 04",
          "Apr 05",
          "Apr 06",
          "Apr 09",
          "Apr 10",
          "Apr 12",
          "Apr 14",
          "Apr 17",
          "Apr 18",
          "Apr 18",
          "Apr 20",
          "Apr 22",
          "Apr 24",
        ];
      o(
        a,
        "#kt_charts_widget_33_tab_3",
        "#kt_charts_widget_33_chart_3",
        m,
        c,
        !1
      );
      var g = [
          1800, 1800, 2400, 2400, 3200, 3200, 3e3, 2100, 3200, 3300, 2400, 2400,
          3e3, 3200, 3100,
        ],
        f = [
          "Jun 2021",
          "Jul 2021",
          "Aug 2021",
          "Sep 2021",
          "Oct 2021",
          "Nov 2021",
          "Dec 2021",
          "Jan 2022",
          "Feb 2022",
          "Mar 2022",
          "Apr 2022",
          "May 2022",
          "Jun 2022",
          "Jul 2022",
          "Aug 2022",
        ];
      o(
        l,
        "#kt_charts_widget_33_tab_4",
        "#kt_charts_widget_33_chart_4",
        g,
        f,
        !1
      );
      var u = [
          3e3, 2100, 3300, 3100, 1800, 1800, 2400, 2400, 3100, 3100, 2400, 2400,
          3e3, 2400, 2800,
        ],
        p = [
          "Sep 2021",
          "Oct 2021",
          "Nov 2021",
          "Dec 2021",
          "Jan 2022",
          "Feb 2022",
          "Mar 2022",
          "Apr 2022",
          "May 2022",
          "Jun 2022",
          "Jul 2022",
          "Aug 2022",
          "Sep 2022",
          "Oct 2022",
          "Nov 2022",
        ];
      o(
        r,
        "#kt_charts_widget_33_tab_5",
        "#kt_charts_widget_33_chart_5",
        u,
        p,
        !1
      ),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(),
            t.rendered && t.self.destroy(),
            a.rendered && a.self.destroy(),
            l.rendered && l.self.destroy(),
            r.rendered && r.self.destroy(),
            o(
              e,
              "#kt_charts_widget_33_tab_1",
              "#kt_charts_widget_33_chart_1",
              i,
              s,
              e.rendered
            ),
            o(
              t,
              "#kt_charts_widget_33_tab_2",
              "#kt_charts_widget_33_chart_2",
              n,
              d,
              t.rendered
            ),
            o(
              a,
              "#kt_charts_widget_33_tab_3",
              "#kt_charts_widget_33_chart_3",
              m,
              c,
              a.rendered
            ),
            o(
              l,
              "#kt_charts_widget_33_tab_4",
              "#kt_charts_widget_33_chart_4",
              g,
              f,
              l.rendered
            ),
            o(
              r,
              "#kt_charts_widget_33_tab_5",
              "#kt_charts_widget_33_chart_5",
              u,
              p,
              r.rendered
            );
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget33),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget33.init();
  });
var KTChartsWidget34 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = { self: null, rendered: !1 },
    r = { self: null, rendered: !1 },
    o = function (e, t, a, l, r, o) {
      var i = document.querySelector(a);
      if (i) {
        var s = parseInt(KTUtil.css(i, "height")),
          n = i.getAttribute("data-kt-chart-color"),
          d = KTUtil.getCssVariableValue("--bs-gray-500"),
          m = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          c = KTUtil.getCssVariableValue("--bs-" + n),
          g = {
            series: [{ name: "Earnings", data: l }],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: s,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.2,
                stops: [15, 120, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [c] },
            xaxis: {
              categories: r,
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              offsetX: 20,
              tickAmount: 4,
              labels: {
                rotate: 0,
                rotateAlways: !1,
                show: !1,
                style: { colors: d, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: c, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: { tickAmount: 4, max: 4e3, min: 1e3, labels: { show: !1 } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e + "$";
                },
              },
            },
            colors: [c],
            grid: {
              borderColor: m,
              strokeDashArray: 3,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: c, strokeWidth: 3 },
          };
        e.self = new ApexCharts(i, g);
        var f = document.querySelector(t);
        !0 === o &&
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200),
          f.addEventListener("shown.bs.tab", function (t) {
            !1 === e.rendered && (e.self.render(), (e.rendered = !0));
          });
      }
    };
  return {
    init: function () {
      var i = [
          2100, 2800, 2800, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200,
          2800, 2800, 3250, 3250,
        ],
        s = [
          "10AM",
          "10.30AM",
          "11AM",
          "11.15AM",
          "11.30AM",
          "12PM",
          "1PM",
          "2PM",
          "3PM",
          "4PM",
          "5PM",
          "6PM",
          "7PM",
          "8PM",
          "9PM",
        ];
      o(
        e,
        "#kt_charts_widget_34_tab_1",
        "#kt_charts_widget_34_chart_1",
        i,
        s,
        !0
      );
      var n = [
          2300, 2300, 2e3, 3100, 3100, 2800, 2400, 2400, 3100, 2900, 3200, 3200,
          2600, 2600, 3200,
        ],
        d = [
          "Apr 01",
          "Apr 02",
          "Apr 03",
          "Apr 04",
          "Apr 05",
          "Apr 06",
          "Apr 07",
          "Apr 08",
          "Apr 09",
          "Apr 10",
          "Apr 11",
          "Apr 12",
          "Apr 13",
          "Apr 14",
          "Apr 15",
        ];
      o(
        t,
        "#kt_charts_widget_34_tab_2",
        "#kt_charts_widget_34_chart_2",
        n,
        d,
        !1
      );
      var m = [
          2600, 3400, 2300, 2300, 2e3, 3100, 3100, 2900, 3200, 3200, 2600, 3100,
          2800, 2400, 2400,
        ],
        c = [
          "Apr 02",
          "Apr 03",
          "Apr 04",
          "Apr 05",
          "Apr 06",
          "Apr 09",
          "Apr 10",
          "Apr 12",
          "Apr 14",
          "Apr 17",
          "Apr 18",
          "Apr 18",
          "Apr 20",
          "Apr 22",
          "Apr 24",
        ];
      o(
        a,
        "#kt_charts_widget_34_tab_3",
        "#kt_charts_widget_34_chart_3",
        m,
        c,
        !1
      );
      var g = [
          1800, 1800, 2400, 2400, 3100, 3100, 3e3, 2100, 3200, 3200, 2400, 2400,
          3e3, 3200, 3100,
        ],
        f = [
          "Jun 2021",
          "Jul 2021",
          "Aug 2021",
          "Sep 2021",
          "Oct 2021",
          "Nov 2021",
          "Dec 2021",
          "Jan 2022",
          "Feb 2022",
          "Mar 2022",
          "Apr 2022",
          "May 2022",
          "Jun 2022",
          "Jul 2022",
          "Aug 2022",
        ];
      o(
        l,
        "#kt_charts_widget_34_tab_4",
        "#kt_charts_widget_34_chart_4",
        g,
        f,
        !1
      );
      var u = [
          3e3, 2100, 3200, 3200, 1800, 1800, 2400, 2400, 3100, 3100, 2400, 2400,
          3e3, 2400, 2800,
        ],
        p = [
          "Sep 2021",
          "Oct 2021",
          "Nov 2021",
          "Dec 2021",
          "Jan 2022",
          "Feb 2022",
          "Mar 2022",
          "Apr 2022",
          "May 2022",
          "Jun 2022",
          "Jul 2022",
          "Aug 2022",
          "Sep 2022",
          "Oct 2022",
          "Nov 2022",
        ];
      o(
        r,
        "#kt_charts_widget_34_tab_5",
        "#kt_charts_widget_34_chart_5",
        u,
        p,
        !1
      ),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(),
            t.rendered && t.self.destroy(),
            a.rendered && a.self.destroy(),
            l.rendered && l.self.destroy(),
            r.rendered && r.self.destroy(),
            o(
              e,
              "#kt_charts_widget_34_tab_1",
              "#kt_charts_widget_34_chart_1",
              i,
              s,
              e.rendered
            ),
            o(
              t,
              "#kt_charts_widget_34_tab_2",
              "#kt_charts_widget_34_chart_2",
              n,
              d,
              t.rendered
            ),
            o(
              a,
              "#kt_charts_widget_34_tab_3",
              "#kt_charts_widget_34_chart_3",
              m,
              c,
              a.rendered
            ),
            o(
              l,
              "#kt_charts_widget_34_tab_4",
              "#kt_charts_widget_34_chart_4",
              g,
              f,
              l.rendered
            ),
            o(
              r,
              "#kt_charts_widget_34_tab_5",
              "#kt_charts_widget_34_chart_5",
              u,
              p,
              r.rendered
            );
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget34),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget34.init();
  });
var KTChartsWidget35 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = { self: null, rendered: !1 },
    r = { self: null, rendered: !1 },
    o = function (e, t, a, l, r, o) {
      var i = document.querySelector(a);
      if (i) {
        var s = parseInt(KTUtil.css(i, "height")),
          n = i.getAttribute("data-kt-chart-color"),
          d = KTUtil.getCssVariableValue("--bs-gray-500"),
          m = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          c = KTUtil.getCssVariableValue("--bs-" + n),
          g = {
            series: [{ name: "Earnings", data: l }],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: s,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.2,
                stops: [15, 120, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [c] },
            xaxis: {
              categories: r,
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              offsetX: 20,
              tickAmount: 4,
              labels: {
                rotate: 0,
                rotateAlways: !1,
                show: !1,
                style: { colors: d, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: c, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: { tickAmount: 4, max: 4e3, min: 1e3, labels: { show: !1 } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e + "$";
                },
              },
            },
            colors: [c],
            grid: {
              borderColor: m,
              strokeDashArray: 3,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: c, strokeWidth: 3 },
          };
        e.self = new ApexCharts(i, g);
        var f = document.querySelector(t);
        !0 === o &&
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200),
          f.addEventListener("shown.bs.tab", function (t) {
            !1 === e.rendered && (e.self.render(), (e.rendered = !0));
          });
      }
    };
  return {
    init: function () {
      var i = [
          2100, 3100, 3100, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200,
          2800, 2800, 3250, 3250,
        ],
        s = [
          "10AM",
          "10.30AM",
          "11AM",
          "11.15AM",
          "11.30AM",
          "12PM",
          "1PM",
          "2PM",
          "3PM",
          "4PM",
          "5PM",
          "6PM",
          "7PM",
          "8PM",
          "9PM",
        ];
      o(
        e,
        "#kt_charts_widget_35_tab_1",
        "#kt_charts_widget_35_chart_1",
        i,
        s,
        !0
      );
      var n = [
          2300, 2300, 2e3, 3200, 3200, 2800, 2400, 2400, 3100, 2900, 3200, 3200,
          2600, 2600, 3200,
        ],
        d = [
          "Apr 01",
          "Apr 02",
          "Apr 03",
          "Apr 04",
          "Apr 05",
          "Apr 06",
          "Apr 07",
          "Apr 08",
          "Apr 09",
          "Apr 10",
          "Apr 11",
          "Apr 12",
          "Apr 13",
          "Apr 14",
          "Apr 15",
        ];
      o(
        t,
        "#kt_charts_widget_35_tab_2",
        "#kt_charts_widget_35_chart_2",
        n,
        d,
        !1
      );
      var m = [
          2600, 3200, 2300, 2300, 2e3, 3200, 3100, 2900, 3400, 3400, 2600, 3200,
          2800, 2400, 2400,
        ],
        c = [
          "Apr 02",
          "Apr 03",
          "Apr 04",
          "Apr 05",
          "Apr 06",
          "Apr 09",
          "Apr 10",
          "Apr 12",
          "Apr 14",
          "Apr 17",
          "Apr 18",
          "Apr 18",
          "Apr 20",
          "Apr 22",
          "Apr 24",
        ];
      o(
        a,
        "#kt_charts_widget_35_tab_3",
        "#kt_charts_widget_35_chart_3",
        m,
        c,
        !1
      );
      var g = [
          1800, 1800, 2400, 2400, 3200, 3200, 3e3, 2100, 3200, 3200, 2400, 2400,
          3e3, 3200, 3100,
        ],
        f = [
          "Jun 2021",
          "Jul 2021",
          "Aug 2021",
          "Sep 2021",
          "Oct 2021",
          "Nov 2021",
          "Dec 2021",
          "Jan 2022",
          "Feb 2022",
          "Mar 2022",
          "Apr 2022",
          "May 2022",
          "Jun 2022",
          "Jul 2022",
          "Aug 2022",
        ];
      o(
        l,
        "#kt_charts_widget_35_tab_4",
        "#kt_charts_widget_35_chart_4",
        g,
        f,
        !1
      );
      var u = [
          3200, 2100, 3200, 3200, 3200, 3500, 3e3, 2400, 3250, 2400, 2400, 3250,
          3e3, 2400, 2800,
        ],
        p = [
          "Sep 2021",
          "Oct 2021",
          "Nov 2021",
          "Dec 2021",
          "Jan 2022",
          "Feb 2022",
          "Mar 2022",
          "Apr 2022",
          "May 2022",
          "Jun 2022",
          "Jul 2022",
          "Aug 2022",
          "Sep 2022",
          "Oct 2022",
          "Nov 2022",
        ];
      o(
        r,
        "#kt_charts_widget_35_tab_5",
        "#kt_charts_widget_35_chart_5",
        u,
        p,
        !1
      ),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(),
            t.rendered && t.self.destroy(),
            a.rendered && a.self.destroy(),
            l.rendered && l.self.destroy(),
            r.rendered && r.self.destroy(),
            o(
              e,
              "#kt_charts_widget_35_tab_1",
              "#kt_charts_widget_35_chart_1",
              i,
              s,
              e.rendered
            ),
            o(
              t,
              "#kt_charts_widget_35_tab_2",
              "#kt_charts_widget_35_chart_2",
              n,
              d,
              t.rendered
            ),
            o(
              a,
              "#kt_charts_widget_35_tab_3",
              "#kt_charts_widget_35_chart_3",
              m,
              c,
              a.rendered
            ),
            o(
              l,
              "#kt_charts_widget_35_tab_4",
              "#kt_charts_widget_35_chart_4",
              g,
              f,
              l.rendered
            ),
            o(
              r,
              "#kt_charts_widget_35_tab_5",
              "#kt_charts_widget_35_chart_5",
              u,
              p,
              r.rendered
            );
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget35),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget35.init();
  });
var KTChartsWidget36 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_charts_widget_36");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-500"),
          r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          o = KTUtil.getCssVariableValue("--bs-primary"),
          i = KTUtil.getCssVariableValue("--bs-primary"),
          s = KTUtil.getCssVariableValue("--bs-success"),
          n = {
            series: [
              {
                name: "Inbound Calls",
                data: [
                  65, 80, 80, 60, 60, 45, 45, 80, 80, 70, 70, 90, 90, 80, 80,
                  80, 60, 60, 50,
                ],
              },
              {
                name: "Outbound Calls",
                data: [
                  90, 110, 110, 95, 95, 85, 85, 95, 95, 115, 115, 100, 100, 115,
                  115, 95, 95, 85, 85,
                ],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.2,
                stops: [15, 120, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [o, s] },
            xaxis: {
              categories: [
                "",
                "8 AM",
                "81 AM",
                "9 AM",
                "10 AM",
                "11 AM",
                "12 PM",
                "13 PM",
                "14 PM",
                "15 PM",
                "16 PM",
                "17 PM",
                "18 PM",
                "18:20 PM",
                "18:20 PM",
                "19 PM",
                "20 PM",
                "21 PM",
                "",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              tickAmount: 6,
              labels: {
                rotate: 0,
                rotateAlways: !0,
                style: { colors: l, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: [o, s], width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              max: 120,
              min: 30,
              tickAmount: 6,
              labels: { style: { colors: l, fontSize: "12px" } },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: { style: { fontSize: "12px" } },
            colors: [i, KTUtil.getCssVariableValue("--bs-success")],
            grid: {
              borderColor: r,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: [o, s], strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, n)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget36),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget36.init();
  });
var KTChartsWidget37 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = { self: null, rendered: !1 },
    r = function (e, t, a, l, r, o) {
      var i = document.querySelector(a);
      if (i) {
        var s = parseInt(KTUtil.css(i, "height")),
          n = i.getAttribute("data-kt-chart-color"),
          d = KTUtil.getCssVariableValue("--bs-gray-500"),
          m = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          c = KTUtil.getCssVariableValue("--bs-" + n),
          g = {
            series: [{ name: "Earnings", data: l }],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: s,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.2,
                stops: [15, 120, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [c] },
            xaxis: {
              categories: r,
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              offsetX: 20,
              tickAmount: 4,
              labels: {
                rotate: 0,
                rotateAlways: !1,
                show: !1,
                style: { colors: d, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: c, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: { tickAmount: 4, max: 4e3, min: 1e3, labels: { show: !1 } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e + "$";
                },
              },
            },
            colors: [c],
            grid: {
              borderColor: m,
              strokeDashArray: 3,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: c, strokeWidth: 3 },
          };
        e.self = new ApexCharts(i, g);
        var f = document.querySelector(t);
        !0 === o &&
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200),
          f.addEventListener("shown.bs.tab", function (t) {
            !1 === e.rendered && (e.self.render(), (e.rendered = !0));
          });
      }
    };
  return {
    init: function () {
      var o = [
          2100, 3200, 3200, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200, 3e3,
          3e3, 3250, 3250,
        ],
        i = [
          "10AM",
          "10.30AM",
          "11AM",
          "11.15AM",
          "11.30AM",
          "12PM",
          "1PM",
          "2PM",
          "3PM",
          "4PM",
          "5PM",
          "6PM",
          "7PM",
          "8PM",
          "9PM",
        ];
      r(
        e,
        "#kt_charts_widget_37_tab_1",
        "#kt_charts_widget_37_chart_1",
        o,
        i,
        !0
      );
      var s = [
          2300, 2300, 2e3, 3200, 3200, 2800, 2400, 2400, 3100, 2900, 3100, 3100,
          2600, 2600, 3200,
        ],
        n = [
          "Apr 01",
          "Apr 02",
          "Apr 03",
          "Apr 04",
          "Apr 05",
          "Apr 06",
          "Apr 07",
          "Apr 08",
          "Apr 09",
          "Apr 10",
          "Apr 11",
          "Apr 12",
          "Apr 13",
          "Apr 14",
          "Apr 15",
        ];
      r(
        t,
        "#kt_charts_widget_37_tab_2",
        "#kt_charts_widget_37_chart_2",
        s,
        n,
        !1
      );
      var d = [
          2600, 3200, 2300, 2300, 2e3, 3200, 3100, 2900, 3200, 3200, 2600, 3100,
          2800, 2400, 2400,
        ],
        m = [
          "Apr 02",
          "Apr 03",
          "Apr 04",
          "Apr 05",
          "Apr 06",
          "Apr 09",
          "Apr 10",
          "Apr 12",
          "Apr 14",
          "Apr 17",
          "Apr 18",
          "Apr 18",
          "Apr 20",
          "Apr 22",
          "Apr 24",
        ];
      r(
        a,
        "#kt_charts_widget_37_tab_3",
        "#kt_charts_widget_37_chart_3",
        d,
        m,
        !1
      );
      var c = [
          1800, 1800, 2400, 2400, 3200, 3200, 3e3, 2100, 3200, 3300, 2400, 2400,
          3e3, 3200, 3100,
        ],
        g = [
          "Jun 2021",
          "Jul 2021",
          "Aug 2021",
          "Sep 2021",
          "Oct 2021",
          "Nov 2021",
          "Dec 2021",
          "Jan 2022",
          "Feb 2022",
          "Mar 2022",
          "Apr 2022",
          "May 2022",
          "Jun 2022",
          "Jul 2022",
          "Aug 2022",
        ];
      r(
        l,
        "#kt_charts_widget_37_tab_4",
        "#kt_charts_widget_37_chart_4",
        c,
        g,
        !1
      ),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(),
            t.rendered && t.self.destroy(),
            a.rendered && a.self.destroy(),
            l.rendered && l.self.destroy(),
            r(
              e,
              "#kt_charts_widget_37_tab_1",
              "#kt_charts_widget_37_chart_1",
              o,
              i,
              e.rendered
            ),
            r(
              t,
              "#kt_charts_widget_37_tab_2",
              "#kt_charts_widget_37_chart_2",
              s,
              n,
              t.rendered
            ),
            r(
              a,
              "#kt_charts_widget_37_tab_3",
              "#kt_charts_widget_37_chart_3",
              d,
              m,
              a.rendered
            ),
            r(
              l,
              "#kt_charts_widget_37_tab_4",
              "#kt_charts_widget_37_chart_4",
              c,
              g,
              l.rendered
            );
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget37),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget37.init();
  });
var KTChartsWidget38 = (function () {
  var e = { self: null, rendered: !1 },
    t = function () {
      var t = document.getElementById("kt_charts_widget_38_chart");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-900"),
          r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          o = {
            series: [
              { name: "LOI Issued", data: [54, 42, 75, 110, 23, 87, 50] },
            ],
            chart: {
              fontFamily: "inherit",
              type: "bar",
              height: a,
              toolbar: { show: !1 },
            },
            plotOptions: {
              bar: {
                horizontal: !1,
                columnWidth: ["28%"],
                borderRadius: 5,
                dataLabels: { position: "top" },
                startingShape: "flat",
              },
            },
            legend: { show: !1 },
            dataLabels: {
              enabled: !0,
              offsetY: -28,
              style: { fontSize: "13px", colors: [l] },
              formatter: function (e) {
                return e;
              },
            },
            stroke: { show: !0, width: 2, colors: ["transparent"] },
            xaxis: {
              categories: ["E2E", "IMC", "SSMC", "SSBD", "ICCD", "PAN", "SBN"],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: {
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                  fontSize: "13px",
                },
              },
              crosshairs: {
                fill: { gradient: { opacityFrom: 0, opacityTo: 0 } },
              },
            },
            yaxis: {
              labels: {
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                  fontSize: "13px",
                },
                formatter: function (e) {
                  return e + "M";
                },
              },
            },
            fill: { opacity: 1 },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return +e + "M";
                },
              },
            },
            colors: [
              KTUtil.getCssVariableValue("--bs-primary"),
              KTUtil.getCssVariableValue("--bs-primary-light"),
            ],
            grid: {
              borderColor: r,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
          };
        (e.self = new ApexCharts(t, o)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t();
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget38),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget38.init();
  });
var KTChartsWidget39 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.querySelector("#kt_charts_widget_39_chart");
        if (e) {
          var t,
            a = function () {
              if ((t = am5.Root.new(e))) {
                t.setThemes([am5themes_Animated.new(t)]);
                var a = t.container.children.push(
                    am5radar.RadarChart.new(t, {
                      panX: !1,
                      panY: !1,
                      wheelX: "panX",
                      wheelY: "zoomX",
                    })
                  ),
                  l = am5radar.AxisRendererCircular.new(t, {});
                l.labels.template.setAll({ radius: 10 }),
                  l.grid.template.setAll({
                    stroke: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-700")
                    ),
                  });
                var r = am5radar.AxisRendererRadial.new(t, {
                  minGridDistance: 20,
                });
                r.grid.template.setAll({
                  stroke: am5.color(
                    KTUtil.getCssVariableValue("--bs-gray-700")
                  ),
                });
                var o = a.xAxes.push(
                    am5xy.CategoryAxis.new(t, {
                      maxDeviation: 0,
                      categoryField: "category",
                      renderer: l,
                      tooltip: am5.Tooltip.new(t, {}),
                    })
                  ),
                  i = a.yAxes.push(
                    am5xy.ValueAxis.new(t, { min: 0, max: 10, renderer: r })
                  );
                l.labels.template.setAll({
                  fontSize: 11,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-800")),
                }),
                  r.labels.template.setAll({
                    fontSize: 11,
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-800")
                    ),
                  });
                var s = a.series.push(
                  am5radar.RadarColumnSeries.new(t, {
                    xAxis: o,
                    yAxis: i,
                    valueYField: "value",
                    categoryXField: "category",
                  })
                );
                s.columns.template.setAll({
                  tooltipText: "{categoryX}: {valueY}",
                  templateField: "columnSettings",
                  strokeOpacity: 0,
                  width: am5.p100,
                });
                var n = [
                  {
                    category: "Spain",
                    value: 5,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "Spain",
                    value: 4,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "United States",
                    value: 9,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "Italy",
                    value: 7,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "France",
                    value: 8,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "Norway",
                    value: 4,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "Brasil",
                    value: 7,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "Canada",
                    value: 5,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                ];
                s.data.setAll(n),
                  o.data.setAll(n),
                  s.appear(1e3),
                  a.appear(1e3, 100);
              }
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget39),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget39.init();
  });
var KTChartsWidget4 = (function () {
  var e = { self: null, rendered: !1 },
    t = function () {
      var t = document.getElementById("kt_charts_widget_4");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-500"),
          r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          o = KTUtil.getCssVariableValue("--bs-primary"),
          i = {
            series: [
              {
                name: "Sales",
                data: [
                  34.5, 34.5, 35, 35, 35.5, 35.5, 35, 35, 35.5, 35.5, 35, 35,
                  34.5, 34.5, 35, 35, 35.5, 35.5, 35,
                ],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 80, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [o] },
            xaxis: {
              categories: [
                "",
                "Apr 02",
                "Apr 03",
                "Apr 04",
                "Apr 05",
                "Apr 06",
                "Apr 07",
                "Apr 08",
                "Apr 09",
                "Apr 10",
                "Apr 11",
                "Apr 12",
                "Apr 13",
                "Apr 14",
                "Apr 17",
                "Apr 18",
                "Apr 19",
                "Apr 21",
                "",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              tickAmount: 6,
              labels: {
                rotate: 0,
                rotateAlways: !0,
                style: { colors: l, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: o, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              max: 36.3,
              min: 33,
              tickAmount: 6,
              labels: {
                style: { colors: l, fontSize: "12px" },
                formatter: function (e) {
                  return "$" + parseInt(10 * e);
                },
              },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return "$" + parseInt(10 * e);
                },
              },
            },
            colors: [KTUtil.getCssVariableValue("--bs-primary")],
            grid: {
              borderColor: r,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: o, strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, i)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t();
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget4),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget4.init();
  });
var KTChartsWidget40 = {
  init: function () {
    !(function () {
      if ("undefined" != typeof am5) {
        var e = document.querySelector("#kt_charts_widget_40_chart");
        if (e) {
          var t,
            a = function () {
              if ((t = am5.Root.new(e))) {
                t.setThemes([am5themes_Animated.new(t)]);
                var a = t.container.children.push(
                    am5radar.RadarChart.new(t, {
                      panX: !1,
                      panY: !1,
                      wheelX: "panX",
                      wheelY: "zoomX",
                    })
                  ),
                  l = am5radar.AxisRendererCircular.new(t, {});
                l.labels.template.setAll({ radius: 10 }),
                  l.grid.template.setAll({
                    stroke: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-700")
                    ),
                  });
                var r = am5radar.AxisRendererRadial.new(t, {
                  minGridDistance: 20,
                });
                r.grid.template.setAll({
                  stroke: am5.color(
                    KTUtil.getCssVariableValue("--bs-gray-700")
                  ),
                });
                var o = a.xAxes.push(
                    am5xy.CategoryAxis.new(t, {
                      maxDeviation: 0,
                      categoryField: "category",
                      renderer: l,
                      tooltip: am5.Tooltip.new(t, {}),
                    })
                  ),
                  i = a.yAxes.push(
                    am5xy.ValueAxis.new(t, { min: 0, max: 10, renderer: r })
                  );
                l.labels.template.setAll({
                  fontSize: 11,
                  fill: am5.color(KTUtil.getCssVariableValue("--bs-gray-800")),
                }),
                  r.labels.template.setAll({
                    fontSize: 11,
                    fill: am5.color(
                      KTUtil.getCssVariableValue("--bs-gray-800")
                    ),
                  });
                var s = a.series.push(
                  am5radar.RadarColumnSeries.new(t, {
                    xAxis: o,
                    yAxis: i,
                    valueYField: "value",
                    categoryXField: "category",
                  })
                );
                s.columns.template.setAll({
                  tooltipText: "{categoryX}: {valueY}",
                  templateField: "columnSettings",
                  strokeOpacity: 0,
                  width: am5.p100,
                });
                var n = [
                  {
                    category: "Spain",
                    value: 5,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "Spain",
                    value: 4,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "United States",
                    value: 9,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "Italy",
                    value: 7,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "France",
                    value: 8,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "Norway",
                    value: 4,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "Brasil",
                    value: 7,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                  {
                    category: "Canada",
                    value: 5,
                    columnSettings: { fill: a.get("colors").next() },
                  },
                ];
                s.data.setAll(n),
                  o.data.setAll(n),
                  s.appear(1e3),
                  a.appear(1e3, 100);
              }
            };
          am5.ready(function () {
            a();
          }),
            KTThemeMode.on("kt.thememode.change", function () {
              t.dispose(), a();
            });
        }
      }
    })();
  },
};
"undefined" != typeof module && (module.exports = KTChartsWidget40),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget40.init();
  });
var KTChartsWidget41 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = { self: null, rendered: !1 },
    l = { self: null, rendered: !1 },
    r = { self: null, rendered: !1 },
    o = function (e, t, a, l, r, o) {
      var i = document.querySelector(a);
      if (i) {
        var s = parseInt(KTUtil.css(i, "height")),
          n = i.getAttribute("data-kt-chart-color"),
          d = KTUtil.getCssVariableValue("--bs-gray-500"),
          m = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          c = KTUtil.getCssVariableValue("--bs-" + n),
          g = {
            series: [{ name: "Earnings", data: l }],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: s,
              toolbar: { show: !1 },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.2,
                stops: [15, 120, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [c] },
            xaxis: {
              categories: r,
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              offsetX: 20,
              tickAmount: 4,
              labels: {
                rotate: 0,
                rotateAlways: !1,
                show: !1,
                style: { colors: d, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: c, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: { tickAmount: 4, max: 4e3, min: 1e3, labels: { show: !1 } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e + "$";
                },
              },
            },
            colors: [c],
            grid: {
              borderColor: m,
              strokeDashArray: 3,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: c, strokeWidth: 3 },
          };
        e.self = new ApexCharts(i, g);
        var f = document.querySelector(t);
        !0 === o &&
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200),
          f.addEventListener("shown.bs.tab", function (t) {
            !1 === e.rendered && (e.self.render(), (e.rendered = !0));
          });
      }
    };
  return {
    init: function () {
      var i = [
          2100, 3100, 3100, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200,
          2800, 2800, 3250, 3250,
        ],
        s = [
          "10AM",
          "10.30AM",
          "11AM",
          "11.15AM",
          "11.30AM",
          "12PM",
          "1PM",
          "2PM",
          "3PM",
          "4PM",
          "5PM",
          "6PM",
          "7PM",
          "8PM",
          "9PM",
        ];
      o(
        e,
        "#kt_charts_widget_41_tab_1",
        "#kt_charts_widget_41_chart_1",
        i,
        s,
        !0
      );
      var n = [
          2300, 2300, 2e3, 3200, 3200, 2800, 2400, 2400, 3100, 2900, 3200, 3200,
          2600, 2600, 3200,
        ],
        d = [
          "Apr 01",
          "Apr 02",
          "Apr 03",
          "Apr 04",
          "Apr 05",
          "Apr 06",
          "Apr 07",
          "Apr 08",
          "Apr 09",
          "Apr 10",
          "Apr 11",
          "Apr 12",
          "Apr 13",
          "Apr 14",
          "Apr 15",
        ];
      o(
        t,
        "#kt_charts_widget_41_tab_2",
        "#kt_charts_widget_41_chart_2",
        n,
        d,
        !1
      );
      var m = [
          2600, 3200, 2300, 2300, 2e3, 3200, 3100, 2900, 3400, 3400, 2600, 3200,
          2800, 2400, 2400,
        ],
        c = [
          "Apr 02",
          "Apr 03",
          "Apr 04",
          "Apr 05",
          "Apr 06",
          "Apr 09",
          "Apr 10",
          "Apr 12",
          "Apr 14",
          "Apr 17",
          "Apr 18",
          "Apr 18",
          "Apr 20",
          "Apr 22",
          "Apr 24",
        ];
      o(
        a,
        "#kt_charts_widget_41_tab_3",
        "#kt_charts_widget_41_chart_3",
        m,
        c,
        !1
      );
      var g = [
          1800, 1800, 2400, 2400, 3200, 3200, 3e3, 2100, 3200, 3200, 2400, 2400,
          3e3, 3200, 3100,
        ],
        f = [
          "Jun 2021",
          "Jul 2021",
          "Aug 2021",
          "Sep 2021",
          "Oct 2021",
          "Nov 2021",
          "Dec 2021",
          "Jan 2022",
          "Feb 2022",
          "Mar 2022",
          "Apr 2022",
          "May 2022",
          "Jun 2022",
          "Jul 2022",
          "Aug 2022",
        ];
      o(
        l,
        "#kt_charts_widget_41_tab_4",
        "#kt_charts_widget_41_chart_4",
        g,
        f,
        !1
      );
      var u = [
          3200, 2100, 3200, 3200, 3200, 3500, 3e3, 2400, 3250, 2400, 2400, 3250,
          3e3, 2400, 2800,
        ],
        p = [
          "Sep 2021",
          "Oct 2021",
          "Nov 2021",
          "Dec 2021",
          "Jan 2022",
          "Feb 2022",
          "Mar 2022",
          "Apr 2022",
          "May 2022",
          "Jun 2022",
          "Jul 2022",
          "Aug 2022",
          "Sep 2022",
          "Oct 2022",
          "Nov 2022",
        ];
      o(
        r,
        "#kt_charts_widget_41_tab_5",
        "#kt_charts_widget_41_chart_5",
        u,
        p,
        !1
      ),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(),
            t.rendered && t.self.destroy(),
            a.rendered && a.self.destroy(),
            l.rendered && l.self.destroy(),
            r.rendered && r.self.destroy(),
            o(
              e,
              "#kt_charts_widget_41_tab_1",
              "#kt_charts_widget_41_chart_1",
              i,
              s,
              e.rendered
            ),
            o(
              t,
              "#kt_charts_widget_41_tab_2",
              "#kt_charts_widget_41_chart_2",
              n,
              d,
              t.rendered
            ),
            o(
              a,
              "#kt_charts_widget_41_tab_3",
              "#kt_charts_widget_41_chart_3",
              m,
              c,
              a.rendered
            ),
            o(
              l,
              "#kt_charts_widget_41_tab_4",
              "#kt_charts_widget_41_chart_4",
              g,
              f,
              l.rendered
            ),
            o(
              r,
              "#kt_charts_widget_41_tab_5",
              "#kt_charts_widget_41_chart_5",
              u,
              p,
              r.rendered
            );
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget41),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget41.init();
  });
var KTChartsWidget42 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_charts_widget_42");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-500"),
          r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          o = KTUtil.getCssVariableValue("--bs-primary"),
          i = KTUtil.getCssVariableValue("--bs-success"),
          s = {
            series: [
              {
                name: "Inbound Calls",
                data: [45, 80, 53, 80, 75, 100, 76, 117, 76, 110, 70, 112],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [o, i] },
            xaxis: {
              categories: [
                "",
                "29 Sep",
                "1 Aug",
                "2 Aug",
                "3 Aug",
                "4 Aug",
                "5 Aug",
                "6 Aug",
                "7 Aug",
                "8 Aug",
                "9 Aug",
                "10 Aug",
                "11 Aug",
                "12 Aug",
                "13 Aug",
                "14 Aug",
                "15 Aug",
                "16 Aug",
                "",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              tickAmount: 6,
              labels: {
                rotate: 0,
                rotateAlways: !0,
                style: { colors: l, fontSize: "12px" },
              },
              crosshairs: {
                position: "front",
                stroke: { color: [o, i], width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              max: 120,
              min: 30,
              tickAmount: 6,
              labels: { style: { colors: l, fontSize: "12px" } },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: { style: { fontSize: "12px" } },
            colors: [o, i],
            grid: {
              borderColor: r,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
            markers: { strokeColor: [o, i], strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, s)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget42),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget42.init();
  });
var KTChartsWidget43 = (function () {
  var e = { self: null, rendered: !1 },
    t = function () {
      var t = document.getElementById("kt_charts_widget_43");
      if (t) {
        var a = t.getAttribute("data-kt-chart-color"),
          l = parseInt(KTUtil.css(t, "height")),
          r = KTUtil.getCssVariableValue("--bs-gray-800"),
          o = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          i = KTUtil.getCssVariableValue("--bs-" + a),
          s = KTUtil.getCssVariableValue("--bs-" + a + "-light"),
          n = {
            series: [
              {
                name: "Overview",
                data: [30, 30, 45, 45, 35, 35, 25, 25, 50, 50],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: l,
              toolbar: { show: !1 },
              zoom: { enabled: !1 },
              sparkline: { enabled: !0 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: { type: "solid", opacity: 1 },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [i] },
            xaxis: {
              categories: [
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1, style: { colors: r, fontSize: "12px" } },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: { color: o, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              min: 0,
              max: 60,
              labels: { show: !1, style: { colors: r, fontSize: "12px" } },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e;
                },
              },
            },
            colors: [s],
            markers: { colors: s, strokeColor: i, strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, n)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t();
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget43),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget43.init();
  });
var KTChartsWidget44 = (function () {
  var e = { self: null, rendered: !1 },
    t = function () {
      var t = document.getElementById("kt_charts_widget_44");
      if (t) {
        var a = t.getAttribute("data-kt-chart-color"),
          l = parseInt(KTUtil.css(t, "height")),
          r = KTUtil.getCssVariableValue("--bs-gray-800"),
          o = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          i = KTUtil.getCssVariableValue("--bs-" + a),
          s = KTUtil.getCssVariableValue("--bs-" + a + "-light"),
          n = {
            series: [
              { name: "Overview", data: [20, 37, 22, 45, 20, 50, 25, 57, 40] },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: l,
              toolbar: { show: !1 },
              zoom: { enabled: !1 },
              sparkline: { enabled: !0 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: { type: "solid", opacity: 1 },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [i] },
            xaxis: {
              categories: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1, style: { colors: r, fontSize: "12px" } },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: { color: o, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              min: 0,
              max: 60,
              labels: { show: !1, style: { colors: r, fontSize: "12px" } },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e;
                },
              },
            },
            colors: [s],
            markers: { colors: s, strokeColor: i, strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, n)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t();
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget44),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget44.init();
  });
var KTChartsWidget45 = (function () {
  var e = { self: null, rendered: !1 },
    t = function () {
      var t = document.getElementById("kt_charts_widget_45");
      if (t) {
        var a = t.getAttribute("data-kt-chart-color"),
          l = parseInt(KTUtil.css(t, "height")),
          r = KTUtil.getCssVariableValue("--bs-gray-800"),
          o = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          i = KTUtil.getCssVariableValue("--bs-" + a),
          s = KTUtil.getCssVariableValue("--bs-" + a),
          n = {
            series: [{ name: "Overview", data: [15, 15, 42, 42, 13, 13, 35] }],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: l,
              toolbar: { show: !1 },
              zoom: { enabled: !1 },
              sparkline: { enabled: !0 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.3,
                opacityTo: 0.2,
                stops: [15, 120, 100],
              },
            },
            stroke: { curve: "smooth", show: !0, width: 3, colors: [i] },
            xaxis: {
              categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { show: !1, style: { colors: r, fontSize: "12px" } },
              crosshairs: {
                show: !1,
                position: "front",
                stroke: { color: o, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: {
              min: 0,
              max: 60,
              labels: { show: !1, style: { colors: r, fontSize: "12px" } },
            },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e;
                },
              },
            },
            colors: [s],
            markers: { colors: s, strokeColor: i, strokeWidth: 3 },
          };
        (e.self = new ApexCharts(t, n)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t();
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget45),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget45.init();
  });
var KTChartsWidget46 = (function () {
  var e = { self: null, rendered: !1 },
    t = function () {
      var t = document.getElementById("kt_charts_widget_46");
      if (t) {
        var a = t.hasAttribute("data-kt-negative-color")
            ? t.getAttribute("data-kt-negative-color")
            : KTUtil.getCssVariableValue("--bs-gary-500"),
          l = parseInt(KTUtil.css(t, "height")),
          r = KTUtil.getCssVariableValue("--bs-gray-500"),
          o = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          i = {
            series: [
              {
                name: "Subscribed",
                data: [
                  20, 30, 20, 40, 60, 75, 65, 18, 10, 5, 15, 40, 60, 18, 35, 55,
                  20,
                ],
              },
              {
                name: "Unsubscribed",
                data: [
                  -20, -15, -5, -20, -30, -15, -10, -8, -5, -5, -10, -25, -15,
                  -5, -10, -5, -15,
                ],
              },
            ],
            chart: {
              fontFamily: "inherit",
              type: "bar",
              stacked: !0,
              height: l,
              toolbar: { show: !1 },
            },
            plotOptions: {
              bar: {
                columnWidth: "35%",
                barHeight: "70%",
                borderRadius: [4, 4],
              },
            },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            xaxis: {
              categories: [
                "Jan 5",
                "Jan 7",
                "Jan 9",
                "Jan 11",
                "Jan 13",
                "Jan 15",
                "Jan 17",
                "Jan 19",
                "Jan 20",
                "Jan 21",
                "Jan 23",
                "Jan 24",
                "Jan 25",
                "Jan 26",
                "Jan 24",
                "Jan 28",
                "Jan 29",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              tickAmount: 10,
              labels: { style: { colors: [r], fontSize: "12px" } },
              crosshairs: { show: !1 },
            },
            yaxis: {
              min: -100,
              max: 150,
              tickAmount: 5,
              labels: {
                style: { colors: [r], fontSize: "12px" },
                formatter: function (e) {
                  return parseInt(e);
                },
              },
            },
            fill: { opacity: 1 },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px", borderRadius: 4 },
              y: {
                formatter: function (e) {
                  return e > 0 ? e + "K" : Math.abs(e) + "K";
                },
              },
            },
            colors: [KTUtil.getCssVariableValue("--bs-gray-800"), a],
            grid: {
              borderColor: o,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
          };
        (e.self = new ApexCharts(t, i)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t();
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget46),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget46.init();
  });
var KTChartsWidget5 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_charts_widget_5");
      if (t) {
        var a = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          l = {
            series: [{ data: [15, 12, 10, 8, 7, 4, 3], show: !1 }],
            chart: { type: "bar", height: 350, toolbar: { show: !1 } },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: !0,
                distributed: !0,
                barHeight: 23,
              },
            },
            dataLabels: { enabled: !1 },
            legend: { show: !1 },
            colors: [
              "#3E97FF",
              "#F1416C",
              "#50CD89",
              "#FFC700",
              "#7239EA",
              "#50CDCD",
              "#3F4254",
            ],
            xaxis: {
              categories: [
                "Phones",
                "Laptops",
                "Headsets",
                "Games",
                "Keyboardsy",
                "Monitors",
                "Speakers",
              ],
              labels: {
                formatter: function (e) {
                  return e + "K";
                },
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-400"),
                  fontSize: "14px",
                  fontWeight: "600",
                  align: "left",
                },
              },
              axisBorder: { show: !1 },
            },
            yaxis: {
              labels: {
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-800"),
                  fontSize: "14px",
                  fontWeight: "600",
                },
                offsetY: 2,
                align: "left",
              },
            },
            grid: {
              borderColor: a,
              xaxis: { lines: { show: !0 } },
              yaxis: { lines: { show: !1 } },
              strokeDashArray: 4,
            },
          };
        (e.self = new ApexCharts(t, l)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget5),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget5.init();
  });
var KTChartsWidget6 = (function () {
  var e = { self: null, rendered: !1 },
    t = function (e) {
      var t = document.getElementById("kt_charts_widget_6");
      if (t) {
        var a = KTUtil.getCssVariableValue("--bs-gray-800"),
          l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          r = {
            series: [{ name: "Sales", data: [15, 12, 10, 8, 7] }],
            chart: {
              fontFamily: "inherit",
              type: "bar",
              height: 350,
              toolbar: { show: !1 },
            },
            plotOptions: {
              bar: {
                borderRadius: 8,
                horizontal: !0,
                distributed: !0,
                barHeight: 50,
                dataLabels: { position: "bottom" },
              },
            },
            dataLabels: {
              enabled: !0,
              textAnchor: "start",
              offsetX: 0,
              formatter: function (e, t) {
                e *= 1e3;
                return wNumb({ thousand: "," }).to(e);
              },
              style: { fontSize: "14px", fontWeight: "600", align: "left" },
            },
            legend: { show: !1 },
            colors: ["#3E97FF", "#F1416C", "#50CD89", "#FFC700", "#7239EA"],
            xaxis: {
              categories: [
                "ECR - 90%",
                "FGI - 82%",
                "EOQ - 75%",
                "FMG - 60%",
                "PLG - 50%",
              ],
              labels: {
                formatter: function (e) {
                  return e + "K";
                },
                style: {
                  colors: [a],
                  fontSize: "14px",
                  fontWeight: "600",
                  align: "left",
                },
              },
              axisBorder: { show: !1 },
            },
            yaxis: {
              labels: {
                formatter: function (e, t) {
                  return Number.isInteger(e)
                    ? e + " - " + parseInt((100 * e) / 18).toString() + "%"
                    : e;
                },
                style: { colors: a, fontSize: "14px", fontWeight: "600" },
                offsetY: 2,
                align: "left",
              },
            },
            grid: {
              borderColor: l,
              xaxis: { lines: { show: !0 } },
              yaxis: { lines: { show: !1 } },
              strokeDashArray: 4,
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return e + "K";
                },
              },
            },
          };
        (e.self = new ApexCharts(t, r)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(e),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t(e);
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget6),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget6.init();
  });
var KTChartsWidget7 = (function () {
  var e = function (e) {
    var t = document.querySelector(e);
    if (t) {
      var a = parseInt(KTUtil.css(t, "height")),
        l = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
        r = {
          series: [
            { name: "Net Profit", data: data1 },
            { name: "Revenue", data: data2 },
          ],
          chart: {
            fontFamily: "inherit",
            type: "bar",
            height: a,
            toolbar: { show: !1 },
          },
          plotOptions: {
            bar: { horizontal: !1, columnWidth: ["40%"], borderRadius: [6] },
          },
          legend: { show: !1 },
          dataLabels: { enabled: !1 },
          stroke: { show: !0, width: 2, colors: ["transparent"] },
          xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
            labels: {
              style: {
                colors: KTUtil.getCssVariableValue("--bs-gray-700"),
                fontSize: "12px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: KTUtil.getCssVariableValue("--bs-gray-700"),
                fontSize: "12px",
              },
            },
          },
          fill: { opacity: 1 },
          states: {
            normal: { filter: { type: "none", value: 0 } },
            hover: { filter: { type: "none", value: 0 } },
            active: {
              allowMultipleDataPointsSelection: !1,
              filter: { type: "none", value: 0 },
            },
          },
          tooltip: {
            style: { fontSize: "12px" },
            y: {
              formatter: function (e) {
                return "$" + e + " thousands";
              },
            },
          },
          colors: [
            KTUtil.getCssVariableValue("--bs-primary"),
            KTUtil.getCssVariableValue("--bs-primary-light"),
          ],
          grid: {
            borderColor: l,
            strokeDashArray: 4,
            yaxis: { lines: { show: !0 } },
          },
        },
        o = new ApexCharts(t, r),
        i = !1,
        s = document.querySelector(tabSelector);
      !0 === initByDefault && (o.render(), (i = !0)),
        s.addEventListener("shown.bs.tab", function (e) {
          0 == i && (o.render(), (i = !0));
        }),
        (o = new ApexCharts(t, r)).render();
    }
  };
  return {
    init: function () {
      e("#kt_chart_widget_7_tab_1"),
        e("#kt_chart_widget_7_tab_2"),
        e("#kt_chart_widget_7_tab_3"),
        e("#kt_chart_widget_7_tab_4");
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget7),
  KTUtil.onDOMContentLoaded(function () {});
var KTChartsWidget8 = (function () {
  var e = { self: null, rendered: !1 },
    t = { self: null, rendered: !1 },
    a = function (e, t, a, l, r) {
      var o = document.querySelector(a);
      if (o) {
        var i = parseInt(KTUtil.css(o, "height")),
          s = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          n = {
            series: [
              { name: "Social Campaigns", data: l[0] },
              { name: "Email Newsletter", data: l[1] },
              { name: "TV Campaign", data: l[2] },
              { name: "Google Ads", data: l[3] },
              { name: "Courses", data: l[4] },
              { name: "Radio", data: l[5] },
            ],
            chart: {
              fontFamily: "inherit",
              type: "bubble",
              height: i,
              toolbar: { show: !1 },
            },
            plotOptions: { bubble: {} },
            stroke: { show: !1, width: 0 },
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            xaxis: {
              type: "numeric",
              tickAmount: 7,
              min: 0,
              max: 700,
              axisBorder: { show: !1 },
              axisTicks: { show: !0, height: 0 },
              labels: {
                show: !0,
                trim: !0,
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                  fontSize: "13px",
                },
              },
            },
            yaxis: {
              tickAmount: 7,
              min: 0,
              max: 700,
              labels: {
                style: {
                  colors: KTUtil.getCssVariableValue("--bs-gray-500"),
                  fontSize: "13px",
                },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              x: {
                formatter: function (e) {
                  return "Clicks: " + e;
                },
              },
              y: {
                formatter: function (e) {
                  return "$" + e + "K";
                },
              },
              z: { title: "Impression: " },
            },
            crosshairs: {
              show: !0,
              position: "front",
              stroke: {
                color: KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                width: 1,
                dashArray: 0,
              },
            },
            colors: [
              KTUtil.getCssVariableValue("--bs-primary"),
              KTUtil.getCssVariableValue("--bs-success"),
              KTUtil.getCssVariableValue("--bs-warning"),
              KTUtil.getCssVariableValue("--bs-danger"),
              KTUtil.getCssVariableValue("--bs-info"),
              "#43CED7",
            ],
            fill: { opacity: 1 },
            markers: { strokeWidth: 0 },
            grid: {
              borderColor: s,
              strokeDashArray: 4,
              padding: { right: 20 },
              yaxis: { lines: { show: !0 } },
            },
          };
        e.self = new ApexCharts(o, n);
        var d = document.querySelector(t);
        !0 === r &&
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200),
          d.addEventListener("shown.bs.tab", function (t) {
            !1 === e.rendered && (e.self.render(), (e.rendered = !0));
          });
      }
    };
  return {
    init: function () {
      var l = [
          [[100, 250, 30]],
          [[225, 300, 35]],
          [[300, 350, 25]],
          [[350, 350, 20]],
          [[450, 400, 25]],
          [[550, 350, 35]],
        ],
        r = [
          [[125, 300, 40]],
          [[250, 350, 35]],
          [[350, 450, 30]],
          [[450, 250, 25]],
          [[500, 500, 30]],
          [[600, 250, 28]],
        ];
      a(
        e,
        "#kt_chart_widget_8_week_toggle",
        "#kt_chart_widget_8_week_chart",
        l,
        !1
      ),
        a(
          t,
          "#kt_chart_widget_8_month_toggle",
          "#kt_chart_widget_8_month_chart",
          r,
          !0
        );
      KTThemeMode.on("kt.thememode.change", function () {
        e.rendered && e.self.destroy(),
          t.rendered && t.self.destroy(),
          a(
            e,
            "#kt_chart_widget_8_week_toggle",
            "#kt_chart_widget_8_week_chart",
            l,
            e.rendered
          ),
          a(
            t,
            "#kt_chart_widget_8_month_toggle",
            "#kt_chart_widget_8_month_chart",
            r,
            t.rendered
          );
      });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget8),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget8.init();
  });
var KTChartsWidget9 = (function () {
  var e = { self: null, rendered: !1 },
    t = function () {
      var t = document.getElementById("kt_charts_widget_9");
      if (t) {
        var a = parseInt(KTUtil.css(t, "height")),
          l = KTUtil.getCssVariableValue("--bs-gray-400"),
          r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
          o = KTUtil.getCssVariableValue("--bs-gray-200"),
          i = KTUtil.getCssVariableValue("--bs-primary"),
          s = {
            series: [
              { name: "Order", data: [21, 21, 26, 26, 31, 31, 27] },
              { name: "Revenue", data: [12, 16, 16, 21, 21, 18, 18] },
            ],
            chart: {
              fontFamily: "inherit",
              type: "area",
              height: a,
              toolbar: { show: !1 },
            },
            plotOptions: {},
            legend: { show: !1 },
            dataLabels: { enabled: !1 },
            fill: { type: "solid", opacity: 1 },
            stroke: { curve: "smooth", colors: [o] },
            xaxis: {
              categories: [
                "",
                "06 Sep",
                "13 Sep",
                "20 Sep",
                "27 Sep",
                "30 Sep",
                "",
              ],
              axisBorder: { show: !1 },
              axisTicks: { show: !1 },
              labels: { style: { colors: l, fontSize: "12px" } },
              crosshairs: {
                position: "front",
                stroke: { color: l, width: 1, dashArray: 3 },
              },
              tooltip: {
                enabled: !0,
                formatter: void 0,
                offsetY: 0,
                style: { fontSize: "12px" },
              },
            },
            yaxis: { labels: { style: { colors: l, fontSize: "12px" } } },
            states: {
              normal: { filter: { type: "none", value: 0 } },
              hover: { filter: { type: "none", value: 0 } },
              active: {
                allowMultipleDataPointsSelection: !1,
                filter: { type: "none", value: 0 },
              },
            },
            tooltip: {
              style: { fontSize: "12px" },
              y: {
                formatter: function (e) {
                  return "$" + e + " thousands";
                },
              },
            },
            crosshairs: {
              show: !0,
              position: "front",
              stroke: {
                color: KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                width: 1,
                dashArray: 0,
              },
            },
            colors: [o, i],
            grid: {
              borderColor: r,
              strokeDashArray: 4,
              yaxis: { lines: { show: !0 } },
            },
            markers: {
              colors: [o, i],
              strokeColor: [
                KTUtil.getCssVariableValue("--bs-primary"),
                KTUtil.getCssVariableValue("--bs-gray-300"),
              ],
              strokeWidth: 3,
            },
          };
        (e.self = new ApexCharts(t, s)),
          setTimeout(function () {
            e.self.render(), (e.rendered = !0);
          }, 200);
      }
    };
  return {
    init: function () {
      t(),
        KTThemeMode.on("kt.thememode.change", function () {
          e.rendered && e.self.destroy(), t();
        });
    },
  };
})();
"undefined" != typeof module && (module.exports = KTChartsWidget9),
  KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget9.init();
  });
