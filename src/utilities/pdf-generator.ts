import PDFDocument = require("pdfkit");
import { ProjectStatistics } from "@clients";

export class PdfGeneratorService {
  /**
   * Génère un PDF de statistiques du projet
   */
  static generateProjectStatisticsPDF(statistics: ProjectStatistics): any {
    const doc = new PDFDocument();

    // En-tête
    doc.fontSize(24).font("Helvetica-Bold").text("Statistiques du Projet", 50, 50);
    doc.moveDown(0.5);

    // Informations du projet
    doc.fontSize(14).font("Helvetica-Bold").text("Informations du Projet", 50, 100);
    doc.fontSize(12)
      .font("Helvetica")
      .text(`Nom: ${statistics.project?.name || "N/A"}`, 50, 130)
      .text(`Description: ${statistics.project?.description || "N/A"}`, 50, 150)
      .text(`Budget Initial: ${statistics.project?.initialBudget || 0} FCFA`, 50, 170)
      .moveDown();

    // Statistiques
    doc.fontSize(14).font("Helvetica-Bold").text("Statistiques Budgétaires", 50, 220);
    doc.fontSize(12)
      .font("Helvetica")
      .text(`Coût Estimé Total: ${statistics.totalEstimatedCost || 0} FCFA`, 50, 250)
      .text(`Coût Réel Total: ${statistics.totalRealCost || 0} FCFA`, 50, 270)
      .text(`Budget Restant: ${statistics.remainingBudget || 0} FCFA`, 50, 290)
      .text(`Nombre de Transactions: ${statistics.transactionCount || 0}`, 50, 310)
      .moveDown();

    // Calcul du pourcentage d'utilisation
    const projectBudget = statistics.project?.initialBudget || 1;
    const percentUtilized = Math.round((((statistics.totalRealCost || 0) / projectBudget) * 100 * 100) / 100);
    const percentEstimated = Math.round((((statistics.totalEstimatedCost || 0) / projectBudget) * 100 * 100) / 100);

    doc.fontSize(12)
      .font("Helvetica")
      .text(`Pourcentage Utilisé (Réel): ${percentUtilized}%`, 50, 360)
      .text(`Pourcentage Estimé: ${percentEstimated}%`, 50, 380);

    // Pied de page
    doc.fontSize(10)
      .font("Helvetica")
      .text(`Généré le: ${new Date().toLocaleDateString("fr-FR")}`, 50, doc.page.height - 50);

    doc.end();
    return doc;
  }

  /**
   * Génère un PDF de facture/détails du projet
   */
  static generateProjectInvoicePDF(statistics: ProjectStatistics, transactions: any[] = []): any {
    const doc = new PDFDocument();

    // En-tête
    doc.fontSize(20).font("Helvetica-Bold").text("FACTURE PROJET", 50, 40);
    doc.fontSize(10)
      .font("Helvetica")
      .text(`Projet: ${statistics.project?.name || "N/A"}`, 50, 70)
      .text(`Date: ${new Date().toLocaleDateString("fr-FR")}`, 50, 85);

    doc.moveTo(50, 105).lineTo(550, 105).stroke();

    // Tableau des transactions
    doc.fontSize(12).font("Helvetica-Bold").text("Détails des Transactions", 50, 120);
    doc.moveDown(0.5);

    // En-têtes du tableau
    const tableTop = 150;
    const col1X = 50;
    const col2X = 200;
    const col3X = 350;
    const col4X = 450;

    doc.fontSize(10).font("Helvetica-Bold");
    doc.text("Nom", col1X, tableTop);
    doc.text("Description", col2X, tableTop);
    doc.text("Coût Est.", col3X, tableTop);
    doc.text("Coût Réel", col4X, tableTop);

    doc.moveTo(50, tableTop + 15).lineTo(550, tableTop + 15).stroke();

    // Données du tableau
    let yPosition = tableTop + 25;
    doc.fontSize(9).font("Helvetica");

    transactions.forEach((transaction) => {
      if (yPosition > doc.page.height - 100) {
        doc.addPage();
        yPosition = 50;
      }

      doc.text(transaction.name || "", col1X, yPosition);
      doc.text(transaction.description || "", col2X, yPosition);
      doc.text(`${transaction.estimatedCost || 0} FCFA`, col3X, yPosition);
      doc.text(`${transaction.realCost || 0} FCFA`, col4X, yPosition);

      yPosition += 20;
    });

    // Résumé
    doc.moveTo(50, yPosition).lineTo(550, yPosition).stroke();

    yPosition += 15;
    doc.fontSize(11).font("Helvetica-Bold");
    doc.text(`Total Estimé: ${statistics.totalEstimatedCost || 0} FCFA`, col3X, yPosition);

    yPosition += 20;
    doc.text(`Total Réel: ${statistics.totalRealCost || 0} FCFA`, col3X, yPosition);

    yPosition += 20;
    doc.text(`Budget Restant: ${statistics.remainingBudget || 0} FCFA`, col3X, yPosition);

    // Pied de page
    doc.fontSize(9)
      .font("Helvetica")
      .text(`Généré le: ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR")}`, 50, doc.page.height - 40);

    doc.end();
    return doc;
  }

  /**
   * Génère un PDF résumé du projet
   */
  static generateProjectSummaryPDF(statistics: ProjectStatistics): any {
    const doc = new PDFDocument();

    // Couleurs personnalisées
    const accentColor = statistics.project?.color || "#007AFF";

    // En-tête personnalisé
    doc.fontSize(28).font("Helvetica-Bold").text("RÉSUMÉ DU PROJET", 50, 50);

    doc.fontSize(16).font("Helvetica").text(statistics.project?.name || "Projet", 50, 90);
    doc.fontSize(10).font("Helvetica").text(statistics.project?.description || "Sans description", 50, 115);

    doc.moveDown(1);

    // Section budget
    doc.fontSize(14).font("Helvetica-Bold").text("Résumé Budgétaire", 50, 160);

    const budgetBox = { x: 50, y: 190, width: 500, height: 120 };
    doc.rect(budgetBox.x, budgetBox.y, budgetBox.width, budgetBox.height).stroke();

    doc.fontSize(11)
      .font("Helvetica-Bold")
      .text("Budget Initial", 70, 200)
      .font("Helvetica")
      .fontSize(16)
      .text(`${statistics.project?.initialBudget || 0} FCFA`, 70, 220);

    doc.fontSize(11)
      .font("Helvetica-Bold")
      .text("Total Dépensé", 280, 200)
      .font("Helvetica")
      .fontSize(16)
      .text(`${statistics.totalRealCost || 0} FCFA`, 280, 220);

    doc.fontSize(11)
      .font("Helvetica-Bold")
      .text("Restant", 450, 200)
      .font("Helvetica")
      .fontSize(16)
      .text(`${statistics.remainingBudget || 0} FCFA`, 450, 220);

    // Barre de progression
    doc.fontSize(10).font("Helvetica").text("Utilisation du Budget", 50, 330);

    const projectBudget = statistics.project?.initialBudget || 1;
    const percentUtilized = Math.min(((statistics.totalRealCost || 0) / projectBudget) * 100, 100);

    // Fond de la barre
    doc.rect(50, 350, 400, 20).fill("#E8E8E8");

    // Barre d'utilisation (rouge si dépassement)
    const barColor = percentUtilized > 100 ? "#FF3B30" : "#34C759";
    const barWidth = Math.min((percentUtilized / 100) * 400, 400);
    doc.rect(50, 350, barWidth, 20).fill(barColor);

    doc.fillColor("black").fontSize(10).text(`${Math.round(percentUtilized)}%`, 460, 352);

    // Pied de page
    doc.moveDown(5);
    doc.fontSize(9).font("Helvetica").text(`Généré le: ${new Date().toLocaleDateString("fr-FR")}`, 50, doc.page.height - 50);

    doc.end();
    return doc;
  }
}
