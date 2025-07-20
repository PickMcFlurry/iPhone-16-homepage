import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/models/iphone16.glb");
  useEffect(() => {
    const excludeList = [
      "",
      "ArjOFmDNzaBSwZD",
      "mXkFzozcTXfLyuQ",
      "DFBuKSsxxpOpRhd",
    ];
    const logocolor = [
      "IlxFfYKNNssxlBm_001",
      "guTcKQwdaToGoMi_001",
      "DdWdzDpAESzZMHT_001",
      "RbixOJvwPDAnJgY", //volume button
    ];

    const cameraborder = [
      "wwdjrsOZDspvrxe_001",
      "jBfdsjOkFMShqLU_001",
      "RmyubFjMaxDJSTu_001",
      "QqdCrHxuCzexUxf",
      "cvFUDQejBDPZzLM_001",
    ];

    const backcolor = [
      "WUYxwatEaLwQKYC",
      "rlvJaAxZokQwvfU",
      "myubFjMaxDJSTu_001",
      "svYpOgFATPfCAOS_001",
      "pMTAaHJdVwYXgSm",
      "dqgGFgdihIeiZlf_001",
    ];
    Object.entries(materials).map((material) => {
      if (excludeList.includes(material[0])) {
        // Do nothing, skip setting color
      } else if (logocolor.includes(material[0])) {
        material[1].color = new THREE.Color(props.item.color[1]);
      } else if (backcolor.includes(material[0])) {
        material[1].color = new THREE.Color(props.item.color[0]);
      } else if (cameraborder.includes(material[0])) {
        material[1].color = new THREE.Color(props.item.color[2]);
      }

      //else {
      //   material[1].color = new THREE.Color(props.item.color[0]);
      // }
      material[1].needsUpdate = true;
    });
  }, [materials, props.item]);
  // const texture = useTexture(props.item.img);
  // useEffect(() => {
  //   Object.entries(materials).map((material) => {
  //     if (
  //       material[0] !== "sToDXxNwueZqWZI" &&
  //       material[0] !== "mXkFzozcTXfLyuQ" &&
  //       material[0] !== "ArjOFmDNzaBSwZD" &&
  //       material[0] !== "jlzuBkUzuJqgiAK" &&
  //       material[0] !== "xNrofRCqOXXHVZt"
  //     ) {
  //       material[1].color = new THREE.Color(props.item.color[0]);
  //     } else {
  //       material[0] == "";
  //     }
  //     material[1].needsUpdate = true;
  //   });
  // }, [materials, props.item]);
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh //1 side line
          castShadow
          receiveShadow
          geometry={nodes.pjKmpIkIWwGoMTR_1.geometry}
          material={materials.wwdjrsOZDspvrxe_001}
        />
        <mesh //doesnt matter 2
          castShadow
          receiveShadow
          geometry={nodes.iwqxlumJneXOPnd_001_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //camera control button 3
          castShadow
          receiveShadow
          geometry={nodes.XYHxguqWIEOZSMk_001_1.geometry}
          material={materials.cvFUDQejBDPZzLM_001}
        />
        <mesh //doesnt matter 4
          castShadow
          receiveShadow
          geometry={nodes.ZedfQxZdRpOIImb_1.geometry}
          material={materials.ArjOFmDNzaBSwZD}
        />
        <mesh //volume down button 5
          castShadow
          receiveShadow
          geometry={nodes.sBzfdKXBPRaYsBW_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //button camera 6
          castShadow
          receiveShadow
          geometry={nodes.ggaDPRXEUrZtnMJ_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //button volume up 7
          castShadow
          receiveShadow
          geometry={nodes.HrUCnoAkFjmOCiW_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        {/* <mesh // inside of camera button 8
          castShadow
          receiveShadow
          geometry={nodes.iUcVghiCpHcUeSo_001_1.geometry}
          material={materials.QTvfOoaLyvBzead_001}
        /> */}
        <mesh //turn on button 9
          castShadow
          receiveShadow
          geometry={nodes.dahyJJRHSPwQriP_001_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //camera button border 10
          castShadow
          receiveShadow
          geometry={nodes.MbZGmmdTECGPIuF_001_1.geometry}
          material={materials.dqgGFgdihIeiZlf_001}
        />
        <mesh // doesnt matter 11
          castShadow
          receiveShadow
          geometry={nodes.aFyxhronXZWYaJb_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //titanium bar 12
          castShadow
          receiveShadow
          geometry={nodes.fXmkWSdxFIIbExl_001_1.geometry}
          material={materials.DdWdzDpAESzZMHT_001}
        />
        <mesh //top of the notch 13
          castShadow
          receiveShadow
          geometry={nodes.wdFtmsFnhzBBYYb_001_1.geometry}
          material={materials.dHtJfOcLXHFjmwv_001}
        />
        <mesh //doesnt matter 14
          castShadow
          receiveShadow
          geometry={nodes.JBCCrcdplZxGMIi_1.geometry}
          material={materials.PYYcHKdPqkBfILp}
        />
        <mesh //doesnt matter 15
          castShadow
          receiveShadow
          geometry={nodes.UVJpfmUHEHBRvoq_001_1.geometry}
          material={materials.DdWdzDpAESzZMHT_001}
        />
        <mesh //deotn matter 16
          castShadow
          receiveShadow
          geometry={nodes.SUGmtDtLfGpwTKQ_1.geometry}
          material={materials.ArjOFmDNzaBSwZD}
        />
        <mesh // screw side of the port 17
          castShadow
          receiveShadow
          geometry={nodes.yJqQlXRVBEihefr_001_1.geometry}
          material={materials.MXxDtuFlfXWRstO_001}
        />
        <mesh // remaining titanium 18
          castShadow
          receiveShadow
          geometry={nodes.AHfIyhpEzRRqqSp_001_1.geometry}
          material={materials.DdWdzDpAESzZMHT_001}
        />
        <mesh //deont matter 19
          castShadow
          receiveShadow
          geometry={nodes.JvYwENjqsfyEeTn_001_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //Doesnt matter 20
          castShadow
          receiveShadow
          geometry={nodes.NMlbNIJUxaLrafG_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //inside of volume button 21
          castShadow
          receiveShadow
          geometry={nodes.yUJrspAQqGGDqUJ_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //doesnt matter 22
          castShadow
          receiveShadow
          geometry={nodes.qdMFkRQCSAGKWmW_001_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh
          castShadow //doesnt matter 23
          receiveShadow
          geometry={nodes.wNpxyfCnJoGpmKG_001_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh
          castShadow //deotn matter 24
          receiveShadow
          geometry={nodes.CmoOkdmtECGtrqa_001_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //doent maatter 25
          castShadow
          receiveShadow
          geometry={nodes.ctGIMRuXgPcUwMB_001_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //switch on btn border 26
          castShadow
          receiveShadow
          geometry={nodes.prsqwsyiGuZYhcD_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //camera button border color 27
          castShadow
          receiveShadow
          geometry={nodes.GceTjEscIizUaHn_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //volume screw inner border 28
          castShadow
          receiveShadow
          geometry={nodes.TWobYsGmWmxQNCo_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //volume up inner button 29
          castShadow
          receiveShadow
          geometry={nodes.xMkwmsnvSpynynK_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //sound hole inner border 30
          castShadow
          receiveShadow
          geometry={nodes.UzRnxegmZKiVbxz_001_1.geometry}
          material={materials.ULzYbZyAYANatvA_001}
        />
        <mesh //volume down border 31
          castShadow
          receiveShadow
          geometry={nodes.QDmAnbphbVrDStm_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //action border 32
          castShadow
          receiveShadow
          geometry={nodes.dHZxmqWAYRtedsv_1.geometry}
          material={materials.RbixOJvwPDAnJgY}
        />
        <mesh //charging port inner button 33
          castShadow
          receiveShadow
          geometry={nodes.NYHwWgdzqRVtGls_001_1.geometry}
          material={materials.qZbsRZuUcnmHqVA_001}
        />
        <mesh //chargin port border 34
          castShadow
          receiveShadow
          geometry={nodes.rrGAagMNZYVDwQi_001_1.geometry}
          material={materials.wwdjrsOZDspvrxe_001}
        />
        <mesh // inside of charging port 35
          castShadow
          receiveShadow
          geometry={nodes.ideKLAcgKClGbWh_001_1.geometry}
          material={materials.bJIKWwdITHomtLh}
        />
        <mesh //inside of chargin port 36
          castShadow
          receiveShadow
          geometry={nodes.ZoRDfWJscXqrAqZ_1.geometry}
          material={materials.bJIKWwdITHomtLh}
        />
        <mesh //charging port interior color 37
          castShadow
          receiveShadow
          geometry={nodes.zWYfPRrQSZbGsvc_1.geometry}
          material={materials.bJIKWwdITHomtLh}
        />
        <mesh //desnt matter 38
          castShadow
          receiveShadow
          geometry={nodes.pzVCiHXRdkTLCum_001_1.geometry}
          material={materials.nOprJNpxgRbEBQG_001}
        />
        <mesh //deesnt matter 39
          castShadow
          receiveShadow
          geometry={nodes.YmhMoBnUphoNoKv_1.geometry}
          material={materials.ArjOFmDNzaBSwZD}
        />
        <mesh //inside charging port 40
          castShadow
          receiveShadow
          geometry={nodes.esWarYgrvBGzmbE_1.geometry}
          material={materials.bJIKWwdITHomtLh}
        />
        <mesh //inside of charning port 41
          castShadow
          receiveShadow
          geometry={nodes.BgvnmoJLyPShVhG_1.geometry}
          material={materials.bJIKWwdITHomtLh}
        />
        <mesh //
          castShadow
          receiveShadow
          geometry={nodes.JOMpJqoQUFWuHBT_001_1.geometry}
          material={materials.nOprJNpxgRbEBQG_001}
        />

        <mesh //the actual charger border 43
          castShadow
          receiveShadow
          geometry={nodes.LkHKSjnEUFxYwXw_001_1.geometry}
          material={materials.wwdjrsOZDspvrxe_001}
        />
        <mesh //overll charger color 44
          castShadow
          receiveShadow
          geometry={nodes.SUWgJxEFmKbBPDM_1.geometry}
          material={materials.ArjOFmDNzaBSwZD}
        />
        <mesh //doesnt matter 45
          castShadow
          receiveShadow
          geometry={nodes.OZxXcyTnSBSoKir_1.geometry}
          material={materials.jBfdsjOkFMShqLU_001}
          position={[0.005, 0.006, 0.04]}
        />
        <mesh //logo 46
          castShadow
          receiveShadow
          geometry={nodes.nRXIMSRADiAqPXV_001_1.geometry}
          material={materials.guTcKQwdaToGoMi_001}
        />
        {/* <mesh // doesnt matter 47
          castShadow
          receiveShadow
          geometry={nodes.OSKJECezTaTbKQn_001_1.geometry}
          material={materials.RmyubFjMaxDJSTu_001}
        /> */}
        <mesh //the logo color 48
          castShadow
          receiveShadow
          geometry={nodes.OzPbIdboiAhJquq_001_1.geometry}
          material={materials.IlxFfYKNNssxlBm_001}
        />

        <mesh //doesnt matter 49
          castShadow
          receiveShadow
          geometry={nodes.ZDMITXZOWaocZDl_001_1.geometry}
          material={materials.pMTAaHJdVwYXgSm}
        />
        <mesh //the dot betwwen the camera 50
          castShadow
          receiveShadow
          geometry={nodes.iOHQcTDOymCOLPa_001_1.geometry}
          material={materials.jBfdsjOkFMShqLU_001}
        />
        <mesh //the dot betwwen the camera inside 51
          castShadow
          receiveShadow
          geometry={nodes.UQIMhxTpQcAnKuE_001_1.geometry}
          material={materials.svYpOgFATPfCAOS_001}
        />
        <mesh //the whole background color 52
          castShadow
          receiveShadow
          geometry={nodes.SRsTivCExqZrrbq_1.geometry}
          material={materials.WUYxwatEaLwQKYC}
        />

        <mesh //the border of the camera 53
          castShadow
          receiveShadow
          geometry={nodes.iPfHEISlCOUFUJg_1.geometry}
          material={materials.QqdCrHxuCzexUxf}
        ></mesh>
        <mesh //color of flash light 54
          castShadow
          receiveShadow
          geometry={nodes.TrIgPgYjrZtOpQb_1.geometry}
          material={materials.sToDXxNwueZqWZI}
        >
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh //first camera color 55
          castShadow
          receiveShadow
          geometry={nodes.JzhySJEMOyYkpAi_1.geometry}
          material={materials.mXkFzozcTXfLyuQ}
        />
        <mesh //doestn matter 56
          castShadow
          receiveShadow
          geometry={nodes.GEcXUpfxsAYittk_1.geometry}
          material={materials.IEoaprUFYjrYQuo}
        />
        <mesh //doenst matter 57
          castShadow
          receiveShadow
          geometry={nodes.UaOiZpDUfwHxeaQ_001_1.geometry}
          material={materials.YcBrFYNBSNyfVIw}
        />
        <mesh //doesnt matter 58
          castShadow
          receiveShadow
          geometry={nodes.ydsBJrhlcCUADPN_001_1.geometry}
          material={materials.ArjOFmDNzaBSwZD}
        />
        <mesh //doesnt matter 59
          castShadow
          receiveShadow
          geometry={nodes.VLVVWSIPgVbZzxD_1.geometry}
          material={materials.DFBuKSsxxpOpRhd}
        />
        <mesh //first camera inner border 60
          castShadow
          receiveShadow
          geometry={nodes.tdiLfdzHiuobnpo_001_1.geometry}
          material={materials.ktEzOOCQuuMSdnN}
        />
        <mesh //first camera outer border 61
          castShadow
          receiveShadow
          geometry={nodes.QIicyxRdrPBydBr_1.geometry}
          material={materials.rlvJaAxZokQwvfU}
        />
        <mesh //doesnt matter 62
          castShadow
          receiveShadow
          geometry={nodes.XFrqhnYKJUuMkGl_1.geometry}
          material={materials.DFBuKSsxxpOpRhd}
        />
        <mesh //desont matter 63
          castShadow
          receiveShadow
          geometry={nodes.EZzxgQClQXKMNAf_1.geometry}
          material={materials.pMTAaHJdVwYXgSm}
        />
        <mesh //doesnt matter 64
          castShadow
          receiveShadow
          geometry={nodes.dTjiiVQKdYrGkcg_1.geometry}
          material={materials.ArjOFmDNzaBSwZD}
        />
        <mesh //deosnt matter 65
          castShadow
          receiveShadow
          geometry={nodes.BwfabJNuRYQYacT_1.geometry}
          material={materials.IEoaprUFYjrYQuo}
        />
        <mesh //doesnt matter 66
          castShadow
          receiveShadow
          geometry={nodes.cXyICSOuYkyihwo_1.geometry}
          material={materials.DFBuKSsxxpOpRhd}
        />
        <mesh //doesnt matter 67
          castShadow
          receiveShadow
          geometry={nodes.JYuJFZCKMgeZoSX_1.geometry}
          material={materials.DFBuKSsxxpOpRhd}
        />
        <mesh //doesnt matter 68
          castShadow
          receiveShadow
          geometry={nodes.oWwaYqldPzAqzRJ_1.geometry}
          material={materials.YcBrFYNBSNyfVIw}
        />
        <mesh //doesnt matter 69
          castShadow
          receiveShadow
          geometry={nodes.FHJLLchJruDGCGX_001_1.geometry}
          material={materials.DFBuKSsxxpOpRhd}
        />
        <mesh //deosnt matter 70
          castShadow
          receiveShadow
          geometry={nodes.wEfLGhcGzIxDNqQ_001_1.geometry}
          material={materials.IEoaprUFYjrYQuo}
        />
        <mesh //doesnt matter 71
          castShadow
          receiveShadow
          geometry={nodes.uKUzzChrccSZZbt_001_1.geometry}
          material={materials.ArjOFmDNzaBSwZD}
        />
        <mesh //doesnt matter 72
          castShadow
          receiveShadow
          geometry={nodes.ZEwdBnlEHnzzfDL_001_1.geometry}
          material={materials.IEoaprUFYjrYQuo}
        />
        <mesh //second camera color 73
          castShadow
          receiveShadow
          geometry={nodes.xTfhDjoWRFLGVsJ_001_1.geometry}
          material={materials.mXkFzozcTXfLyuQ}
        />
        <mesh //second camera outer border 74
          castShadow
          receiveShadow
          geometry={nodes.UtsUrTfHEiJiCAA_1.geometry}
          material={materials.rlvJaAxZokQwvfU}
        />
        {/* <mesh //deosnt matter 75
          castShadow
          receiveShadow
          geometry={nodes.WuoANQxRNpQKxIO_1.geometry}
          material={materials.pMTAaHJdVwYXgSm}
        /> */}
        {/* <mesh //deosnt matter 76
          castShadow
          receiveShadow
          geometry={nodes.YlihWJAdkrRRDCI_1.geometry}
          material={materials.DFBuKSsxxpOpRhd}
        /> */}
        <mesh //sedond camera inner color 77 exclude
          castShadow
          receiveShadow
          geometry={nodes.dgKFlJKUbReObhm_1.geometry}
          material={materials.ArjOFmDNzaBSwZD}
        />
        <mesh //second camera inner border 78
          castShadow
          receiveShadow
          geometry={nodes.MeYAAjZeBuLIQDS_1.geometry}
          material={materials.ktEzOOCQuuMSdnN}
        />
        <mesh //doenst matter 79
          castShadow
          receiveShadow
          geometry={nodes.PydXoRqUmLFEFbQ_1.geometry}
          material={materials.mQWbDVjQbFZoLKn}
        />
        <mesh //doesnt matter 80
          castShadow
          receiveShadow
          geometry={nodes.SuAGFzxOiUqogKS_001_1.geometry}
          material={materials.QbwGXzyOZwgriGL_001}
        />
        <mesh //doesnt matter 81
          castShadow
          receiveShadow
          geometry={nodes.tMZJGrrUNDSXcPt_1.geometry}
          material={materials.ArjOFmDNzaBSwZD}
        />
        <mesh //doesnt matter 82
          castShadow
          receiveShadow
          geometry={nodes.dEHKBnSxNkNCatR_001_1.geometry}
          material={materials.FsqNMRNvIFvfMyT_001}
        />
        {/* <mesh //doesnt matter 83
          castShadow
          receiveShadow
          geometry={nodes.koOgGyciFaLfQWi_1.geometry}
          material={materials.ztwMzxZRyfuDAka}
        /> */}
        {/* <mesh //inter camera shadow 84
          castShadow
          receiveShadow
          geometry={nodes.kBkfargmEXoWskh_001_1.geometry}
          material={materials.RmyubFjMaxDJSTu_001}
          position={[0, 0.011, 0.052]}
        /> */}
        <mesh //notch doesnt matter 85
          castShadow
          receiveShadow
          geometry={nodes.nebiALwREVCSJFn_001_1.geometry}
          material={materials.bgvGtOnlKTngRTa}
        />
        <mesh //nothc doesnt mattter 86
          castShadow
          receiveShadow
          geometry={nodes.FgGYqCDmJvjNSBz_1.geometry}
          material={materials.sutbfgrzYzWATAD}
        />
        <mesh //notch doesnt matter 87
          castShadow
          receiveShadow
          geometry={nodes.wkjDIALELzQOChK_001_1.geometry}
          material={materials.bgvGtOnlKTngRTa}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RFizOmocwnzbGQJ_1.geometry}
          material={materials.bgvGtOnlKTngRTa}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.xMizMWYsiyRaAZY_1.geometry}
          material={materials.bgvGtOnlKTngRTa}
        />
        <mesh //main screen 90
          castShadow
          receiveShadow
          geometry={nodes.dQWfknomnuBZone_1.geometry}
          material={materials.vWKPeCPaRejOene}
        >
          <meshStandardMaterial color="#000000" />
        </mesh>

        <mesh //screen border 91
          castShadow
          receiveShadow
          geometry={nodes.EAuFkBSDSdPBjEo_1.geometry}
          material={materials.bgvGtOnlKTngRTa}
        />
        <mesh
          castShadows
          receiveShadow
          geometry={nodes.fKJqCnyMsuEhYLh_1.geometry}
          material={materials.VovqRyleCVdRXyX}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.yiBSqiYGdmKSdPa_1.geometry}
          material={materials.IEoaprUFYjrYQuo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ySZMzkhadvPbaYj_001_1.geometry}
          material={materials.DFBuKSsxxpOpRhd}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CIrPySHPJHRPtAx_1.geometry}
          material={materials.DFBuKSsxxpOpRhd}
        />
        <mesh // selfie buttin doesnt atter 96
          castShadow
          receiveShadow
          geometry={nodes.CLJLFFafIZYVZAD_001_1.geometry}
          material={materials.GhmRDUWVRhYeOkJ_001}
        />
        <mesh //doesnt matter 97
          castShadow
          receiveShadow
          geometry={nodes.mPZvLYOFCgmKyGn_001_1.geometry}
          material={materials.ArjOFmDNzaBSwZD}
        />
      </group>
    </group>
  );
}

export default Model;
useGLTF.preload("/models/iphone16.glb");
