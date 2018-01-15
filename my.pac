// ProstoVPN.AntiZapret PAC-host File
// Generated on Mon Jan 15 11:12:35 MSK 2018

d_ad = "\
a-class.org \
a-diplom.com \
a-diploma.com \
a-diplomas.com \
a-diploms.com \
a-diplomy.com \
a-diplomz.com \
a-fina.ru \
seasonvar.ru \
myip.ru \
a-hentai.com \
95.85.19.101 \
95.85.44.163 \
95.85.6.172 \
97.77.104.22 \
".split(" ");

function FindProxyForURL(url, host) {
  if (/\.(ru|co|cu|com|info|net|org|gov|edu|int|mil|biz|pp|ne|msk|spb|nnov|od|in|ho|cc|dn|i|tut|v|dp|sl|ddns|duckdns|livejournal|herokuapp|azurewebsites|ucoz)\.[^.]+$/.test(host))
    host = host.replace(/(.+)\.([^.]+\.[^.]+\.[^.]+$)/, "$2");
  else
    host = host.replace(/(.+)\.([^.]+\.[^.]+$)/, "$2");

  if (/^[a-d]/.test(host)) curarr = d_ad;
  else if (/^[e-h]/.test(host)) curarr = d_eh;
  else if (/^[i-l]/.test(host)) curarr = d_il;
  else if (/^[m-p]/.test(host)) curarr = d_mp;
  else if (/^[q-t]/.test(host)) curarr = d_qt;
  else if (/^[u-z]/.test(host)) curarr = d_uz;
  else curarr = d_other;

  var oip = dnsResolve(host);

  for (var i = 0; i < d_ipaddr.length; i++)
    if (oip === d_ipaddr[i]) {oip = 1; break;}

  for (var i = 0; i < curarr.length; i++) {
    if (oip === 1 || host === curarr[i]) {
      return "SOCKS5 127.0.0.1:9050; SOCKS 127.0.0.1:9050; DIRECT";
    }
  }

  return "DIRECT";
}
