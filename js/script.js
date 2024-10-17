document.addEventListener('DOMContentLoaded', () => {
    let videoArea = document.querySelector("#videoArea video");
    let ask = document.querySelector("#ask");

    // id = identifiant unique pour chaque video
    // letter = lettre pour chaque bouton (peut être plusieurs fois la même)
    // title = titre de la vidéo
    // url = lien de la vidéo
    let ijcData = [
        {
            "id": 1,
            "letter": "0",
            "title": "Introduction",
            "url": "https://media.videoask.com/transcoded/609c22e0-55e9-43db-ace3-d53aa61d51ef/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjYwOWMyMmUwLTU1ZTktNDNkYi1hY2UzLWQ1M2FhNjFkNTFlZiIsImV4cCI6MTcyOTU3NzYxMH0.mqY6nc6Ebd_Gh1U5FbONthvGZw1QquIByyGOYYH0fhQsXnvstnxCdsmbMShWsrZJVOsHk5ZNecRD3c4X4iF96a6iwG76a_710zrAUnkoTecy5VA9em4-e4pUTd7wlNBetOuQMklCpHeCtkO_KOa39fVg6wg-W59TNNbMuA1VoxOVzzCqzrLPIpJ51osjYKo5y6A2-KuaWUWmVQhsWbkRtOyXJbsN-hrvupWWGz94vKTSpzyyNTDXSgem4rsMr5YohIhorWaBmZPAOrtUc8FxwNcFwpjqFbj7dAr2VD8h-cwOsSmIF1QKWvp9F7TXSh03sK9sTrsfVtmXcI6oqCLeYF6zaIXvIcWraDkwbJq3hOl2JXGBClEvEXvWYXPZNLAYPqhC016aZ-5pNoygokka7XMEukA2SOD4pY34lX3tb_wOrVaAdZbjnoiKkY38qt8MO5mhI-3N8srUlp_Ls9TjwRf925DvCz6-H90DuYKLho6rVeAkMI93hvqoL7Cy04U2f5BjvC22lHAdA2RbC2pdApNGqfeYOlY9efWKo8yJekeR7aFl8JVRJS7o0L7xU6kN93D_jIkdpJ4Ad-BmsCYHKjOxEy2xFxbUqe9656NI5fALHncDMf2mDg0KKSReuhhAjHSztdcCsw0NHiDG5mZ7uCeP41aZxM573ai3krT4WnA"
        },
        {
            "id": 2,
            "letter": "A",
            "title": "La culture",
            "url": "https://media.videoask.com/transcoded/010011f4-e1a8-4709-b7a0-f725e0421565/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjAxMDAxMWY0LWUxYTgtNDcwOS1iN2EwLWY3MjVlMDQyMTU2NSIsImV4cCI6MTcyOTUyMzMzOX0.mgmQl1VUnwk5aKg071F5TI2NvmmQN7_keM4nTznjWDwf8q8AaKsyf-wsVG3d7LiGv81ukHgN1nG4a_Nx7pD6cXjeQ7v_sqv_bkyyblPIP5f-kyBSdfLSuC5CLH71wC2vGLGEdWcBGF4kZYlLCTfVD2zpW0a6cgrvD9Mr1OU2kY2mwXAMhsDqsTZbqHHQE4mxk5CAQ2brl_X7bpVJOAAE3j6Bm1soIYm8UHXAangt822D4Hi3uxuP6MB9g4aUd53qSRmw8Ig0JDiNh2hhHGDWHILplHj4pdLxGW8Pn5kQMPXdJknUlJpKuunZBVNtQwmBtyrSZLYY3eLuT-bEm8Vl5LXwhRk5VNIJfzFIyfUhKto2cPeIvtrai1y2n2IXw175UZUA8cT4TkuhqH4cooOUWf_5iVo2uxgbZVMnAOm2er3B0GCZtHHAg2yWZ5Y0DYvidqIZkvxQXD8gJgiQcJti1uULFyCdvtjRhRcjjnLPxSh94XR8-H1K_uVFFh7jKzzeotOdigYXsZxnFCvoz1yxAOfmaDAY_TYC4fjv1eB-DWi1wvpx8lhMKRfwpLbcPrKpxcdfw86bThUHC-EJcdSJzXXlEhl997PYy6eRoMPyD0E-vhC3FsbyecidU5_Yd_h_xMXjuZq-eoU71UBnQl1NZrbjuKrGLgNFxQmK2UjaNRI"
        },
        {
            "id": 3,
            "letter": "B",
            "title": "La fabrication",
            "url": "https://media.videoask.com/transcoded/fcd3a13d-eb9d-48d4-9fe0-d56e0d840321/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImZjZDNhMTNkLWViOWQtNDhkNC05ZmUwLWQ1NmUwZDg0MDMyMSIsImV4cCI6MTcyOTUyMzMzOX0.lsQgr2k7cVwuEWVQiT1Rt5JJrCfdLWivDjEqkEWOVfkV3Zn9Dk4v898LSTvTS0GIFDN7FJdm8VOhLL8_CJJJFGyt5GK6cf0M5Wm6dZ0V6PuxgOhVXepP25bHrISiLSNMhVotP4GNm2HrhJIY0fY3-7h86Ly74p9mpwK57-ZSp0x5XiaQji67TVhIqWbmW34jFbaie0llpPEMFTPDftkA72iJYIvuAkqgcfwp-SzHcjAeV0iXONWvjqOZyoYHDfltDGn-bNNTTHtPOjOCN69uZ-ESPIxJREVzsshuDGaBfaSXLYU_0oCv6XRi9bexYePDHrxxfPP4LlENw3k3n6HQeHXXYvC0A1C3foaLJ4PNzKwafSn-Z8sZUvStD7AfW3zer0TibbtMrVWO-fBPY6OAyTnwYmJbjGOBAKFDTi7XM7SNkv15V0fyzNqog4cWYBpCxsRWFkUJqZFyqWJ0VV8Ta49X3Jqy6iuvegzjiNxNCmyzJYFVWNfpLH0dHenfhQaco020fU9jHDY0NEKhN5SHbuEcAQt9w3o4YxgY7zscF2X3EujYBXVI6dAYwJ6kQpjcf_4e4ROSFnqlEezYgOMFSXHfy2Zhxf2ypbQhXTrLp_2YXQx_8GzTRUkbZoBNZF7yxKiIBBRkJJ9KqCXJixHazEmUt6qxYF_RgR2fziFRTS4"
        },
        {
            "id": 4,
            "letter": "C",
            "title": "Ecologie et valeurs",
            "url": "https://media.videoask.com/transcoded/1b189c70-535e-4447-8635-7795b4d7a325/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjFiMTg5YzcwLTUzNWUtNDQ0Ny04NjM1LTc3OTViNGQ3YTMyNSIsImV4cCI6MTcyOTUyMzMzOX0.qrbh13NT3cbRlHOa0oO-Z9hSmlxFX6fqj-_2dF6jXqccbBPt5mdfnNMt101aetUdbs9_UlYzpHseF87r1M7EWyCORgU0y26y8hErOfpVd3CuoutQeWjs6kkJsLPEHDsN4xpx1XAsRRQBJ8XZd7zivpqfSDF3-NtzfCCQnV7pMV-qGa7Ty61ZmE8E862LhhixKtl5GxqKozQVdC4HFCUrOoqGXVAArpQvMYyVJLapw5OByxMHr7PnEH3bzjZnL_6jQ-fNtjzGjgNhDCcUCyXcZRc0G_mulp3aH6zREYpewW0lh22YHSolczDuLwq4VXblSTAi9kEGcSBmwGxLHDkJftEeFaqJijlh_z3l55ORUCZzxS7Kh_N2uEMnR_iRVtDac7Qcqgcf-kKUR2yTGtLryFsfnAFQnPnUWmwKfAWEsbv1qKuaRd8FeZD0RE5SHsO3j_vcE63gUu1cTJKln00KFEDZPVjUpD15B0PnIgJO-CdBPBIQx5na2GWV2M6vu5KuPqqavEXj1wukVOPpVQ4rMpp-9poFfMcx6HmaRC3bYsNWjQscg2UvveNcIPAjYvK_a0EPe2CsxJh2ueurOvaaDbUcN8sjN-dlwRXn2YBTgXsvQo-ktVXu_NWPUyDDxajCzTptEsteyzT6BrxMSd6g2prTz8hMATVArybIj_NJ5VE",
        },
        {
            "id": 5,
            "letter": "D",
            "title": "La création des collections",
            "url": "https://media.videoask.com/transcoded/4adc54a4-8e4f-44e9-932c-31e7961a674e/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjRhZGM1NGE0LThlNGYtNDRlOS05MzJjLTMxZTc5NjFhNjc0ZSIsImV4cCI6MTcyOTUyMzMzOX0.kZ6imXkgcar5Go7O_uIwSdZ37ycIKMzEHi6xu9T_YfNO8jZDJie0G6g_1v2Q7H48kS4yfgu3TLwJcHrs_NEISKCBCKelwy1wlZCDyNWaXAP23ok-eIDFl6eeATZe9-ddErTGuqtksjsuRQIavzWP43zynYMYysaAusLk5lyUuXVp5XyPmS2_urkl9kZZWAO35l1YG-DbvroRbqPzraqyqTu3iRiZhpZaWu2rnI0JORaJyqZVszFff-fW8ctKM0MrY7Tq-4VjlTD5d8yWXI3lVeemiSZjbrlwiirZHm4RateNsVV9HYVG59cHZipH43LhfmXNZh-oybDj0mgxvB_XnrsO6gkYnong1tp5Rhk5sMGcvq-wFlSfFLBmv-JseAaRkNBXT2uqmsGmqFo0GIA-FtZyQ7Hj3JLpz0O7N_EiS0WA4Eh6NrstddUD1UGbjKgWB0QJGcUUTRWuo30yHZuKNJ4SUrFZP84PuLklcWCYdg4UVQGRd6xyWdttnGNzV8lUGfH1lQ38Ha0jWOdng8tlYKehnu-f6zP9iXrg_aDWJ6KMjfb6OjirKZlXyUojLgqjvaN23LGS8IEJkcx0rbLHU7xa0MsS5QeWjam3FSEF0-PQEZP6M3K9BGdtOOCB5Ig3xg6Nuwl7OmSVyPaSEv1Ss4vhd8acTV1azsYbpcvDmR4",
        },
        {
            "id": 6,
            "letter": "E",
            "title": "La collection",
            "url": "https://media.videoask.com/transcoded/609c22e0-55e9-43db-ace3-d53aa61d51ef/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjYwOWMyMmUwLTU1ZTktNDNkYi1hY2UzLWQ1M2FhNjFkNTFlZiIsImV4cCI6MTcyOTU3NzYxMH0.mqY6nc6Ebd_Gh1U5FbONthvGZw1QquIByyGOYYH0fhQsXnvstnxCdsmbMShWsrZJVOsHk5ZNecRD3c4X4iF96a6iwG76a_710zrAUnkoTecy5VA9em4-e4pUTd7wlNBetOuQMklCpHeCtkO_KOa39fVg6wg-W59TNNbMuA1VoxOVzzCqzrLPIpJ51osjYKo5y6A2-KuaWUWmVQhsWbkRtOyXJbsN-hrvupWWGz94vKTSpzyyNTDXSgem4rsMr5YohIhorWaBmZPAOrtUc8FxwNcFwpjqFbj7dAr2VD8h-cwOsSmIF1QKWvp9F7TXSh03sK9sTrsfVtmXcI6oqCLeYF6zaIXvIcWraDkwbJq3hOl2JXGBClEvEXvWYXPZNLAYPqhC016aZ-5pNoygokka7XMEukA2SOD4pY34lX3tb_wOrVaAdZbjnoiKkY38qt8MO5mhI-3N8srUlp_Ls9TjwRf925DvCz6-H90DuYKLho6rVeAkMI93hvqoL7Cy04U2f5BjvC22lHAdA2RbC2pdApNGqfeYOlY9efWKo8yJekeR7aFl8JVRJS7o0L7xU6kN93D_jIkdpJ4Ad-BmsCYHKjOxEy2xFxbUqe9656NI5fALHncDMf2mDg0KKSReuhhAjHSztdcCsw0NHiDG5mZ7uCeP41aZxM573ai3krT4WnA",
        }
    ];

    // Charger la première vidéo lorsque le DOM est prêt
    videoArea.querySelector("source").src = ijcData[0].url;
    videoArea.load();
    videoArea.play();

    // Ajouter les boutons dynamiquement
    ijcData.forEach(element => {
        ask.innerHTML += `<button data-ijcid="${element.id}"><span class="letter">${element.letter}</span><span class="text">${element.title}</span></button>`;
    });

    // tous les buttons.
    let play = document.querySelector("#controls #play");
    play.addEventListener("click", () => {
        play.classList.toggle("active");

        if (play.classList.contains("active")) {
            videoArea.play();
            play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>`
        } else {
            videoArea.pause();
            play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 6v12l10-6z"></path></svg>`
        }
    })

    let replay = document.querySelector("#controls #replay");
    replay.addEventListener("click", () => {
        videoArea.currentTime = 0;
        videoArea.load();
        videoArea.play();

        if (!play.classList.contains("active")) {
            play.classList.add("active");
            play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>`
        }
    })

    let sound = document.querySelector("#controls #sound");
    sound.addEventListener("click", () => {
        sound.classList.toggle("active");

        if (sound.classList.contains("active")) {
            videoArea.muted = true;
            sound.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m7.727 6.313-4.02-4.02-1.414 1.414 18 18 1.414-1.414-2.02-2.02A9.578 9.578 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.13 8.13 0 0 1-1.671 4.914l-1.286-1.286C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V2.132L7.727 6.313zM4 17h2.697L14 21.868v-3.747L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z"></path></svg>`
        } else {
            videoArea.muted = false;
            sound.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"></path> <path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697L14 21.868V2.132L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z"></path></svg>`
        }

    })

    // videotime et videolength
    let videotime = document.querySelector("#videotime");
    let videolength = document.querySelector("#videolength");

    // Mettre à jour le temps et la durée de la vidéo
    videoArea.addEventListener("loadedmetadata", () => {
        let totalMinutes = Math.floor(videoArea.duration / 60);
        let totalSeconds = Math.floor(videoArea.duration % 60);
        videolength.innerHTML = `${totalMinutes}:${totalSeconds < 10 ? '0' + totalSeconds : totalSeconds}`;
    });

    videoArea.addEventListener("timeupdate", () => {
        let currentMinutes = Math.floor(videoArea.currentTime / 60);
        let currentSeconds = Math.floor(videoArea.currentTime % 60);
        videotime.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;
    });



    // Gérer le changement de vidéo lorsqu'un bouton est cliqué
    document.addEventListener("click", (e) => {
        if (e.target.matches("button") && e.target.getAttribute("data-ijcid")) {
            let ijcId = e.target.getAttribute("data-ijcid");
            let selectedVideo = ijcData[ijcId - 1].url;
            videoArea.querySelector("source").src = selectedVideo;
            videoArea.load();
            videoArea.play();

            play.classList.add("active");
            play.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 7h3v10H8zm5 0h3v10h-3z"></path></svg>`
        }
    });

});